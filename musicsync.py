from os.path import dirname, join
from scipy.io import wavfile
from fastdtw import fastdtw
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import librosa
import librosa.display

# Read stored audio files for comparison
x_1, fs = librosa.load('dance1.mp3')
x_2, fs = librosa.load('dance2.mp3')
x_1 = x_1[:200000]
x_2 = x_2[:200000]

# fig, ax = plt.subplots(nrows=2, sharex=True)
# librosa.display.waveplot(x_1, sr=fs, ax=ax[0])
# librosa.display.waveplot(x_2, sr=fs, ax=ax[1])
# plt.show()

n_fft = 4410
hop_size = 2205

x_1_chroma = librosa.feature.chroma_stft(y=x_1, sr=fs, tuning=0, norm=2, hop_length=hop_size, n_fft=n_fft)
x_2_chroma = librosa.feature.chroma_stft(y=x_2, sr=fs, tuning=0, norm=2, hop_length=hop_size, n_fft=n_fft)

D, wp = librosa.sequence.dtw(X=x_1_chroma, Y=x_2_chroma)
wp_s = np.asarray(wp) * hop_size / fs

# fig = plt.figure(figsize=(10, 10))
# ax = fig.add_subplot(111)
# librosa.display.specshow(D, x_axis='time', y_axis='time', cmap='gray_r', hop_length=hop_size)
# imax = ax.imshow(D, cmap=plt.get_cmap('gray_r'), origin='lower', interpolation='nearest', aspect='auto')
# ax.plot(wp_s[:, 1], wp_s[:, 0], color='r')
# plt.title('Warping Path on Acc. Cost Matrix $D$')
# plt.colorbar()
# plt.show()

fig = plt.figure(figsize=(16, 8))

# Plot x_1
plt.subplot(2, 1, 1)
librosa.display.waveplot(x_1, sr=fs)
plt.title('Slower Version $X_1$')
ax1 = plt.gca()

# Plot x_2
plt.subplot(2, 1, 2)
librosa.display.waveplot(x_2, sr=fs)
plt.title('Slower Version $X_2$')
ax2 = plt.gca()

plt.tight_layout()

trans_figure = fig.transFigure.inverted()
lines = []
arrows = 30
points_idx = np.int16(np.round(np.linspace(0, wp.shape[0] - 1, arrows)))

# for tp1, tp2 in zip((wp[points_idx, 0]) * hop_size, (wp[points_idx, 1]) * hop_size):
for tp1, tp2 in wp[points_idx] * hop_size / fs:
    # get position on axis for a given index-pair
    coord1 = trans_figure.transform(ax1.transData.transform([tp1, 0]))
    coord2 = trans_figure.transform(ax2.transData.transform([tp2, 0]))

    # draw a line
    line = matplotlib.lines.Line2D((coord1[0], coord2[0]), (coord1[1], coord2[1]), transform=fig.transFigure, color='r')
    lines.append(line)

fig.lines = lines
plt.tight_layout()
plt.show()

