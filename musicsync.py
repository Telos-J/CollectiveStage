from os.path import dirname, join
from scipy.io import wavfile
from fastdtw import fastdtw

import matplotlib
matplotlib.use('Agg') # no UI backend

import matplotlib.pyplot as plt

# Read stored audio files for comparison
_, data1 = wavfile.read("Dance the Night Away 1.wav")
_, data2 = wavfile.read("Dance the Night Away 2.wav")

# Set plot style
plt.style.use('seaborn-whitegrid')

# Create subplots
ax = plt.subplot(2, 1, 1)
ax.plot(data1[:100000], color='#67A0DA')
bx = plt.subplot(2, 1, 2)
bx.plot(data2[:100000], color='#67A0DA')

# Display created figure
plt.savefig('matplotlib.png')

dtw_distance, wfrom fastdtw import fastdtw
arp_path = fastdtw(data1[:100000], data2[:100000])
print(distance)
