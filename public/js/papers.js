var papersYear = [2016,2015,2014,2013,2012,2011,2010];
console.log(Array.isArray(papersYear));
var papers = [
  // 2016---------------------------------------------
  [ {
    "id": 1,
    "name": "Microwave Photonic Filter With Two Independently Tunable Passbands Using a Phase Modulator and an Equivalent Phase-Shifted Fiber Bragg Grating",
    "src": "../files/a-2017-1.pdf",
    "author": "Gao, J. Zhang, X. Chen, and J. Yao",
    "express": "IEEE Transactions on Microwave Theory"
  }],
  // 2015---------------------------------------------
  [
  {
    "id": 1,
    "name": "Study on sampled waveguide grating with anti-symmetric periodic structure",
    "src": "../files/a-2015-1.pdf",
    "author": "Hao L, Shi Y, Xiao R, Qian Y, Chen X",
    "express": "Optics express"
  },
  {
    "id": 2,
    "name": "Multi-wavelength distributed feedback laser array with very high wavelength-spacing precision",
    "src": "../files/a-2015-2.pdf",
    "author": "Lu J, Liu S, Tang Q, Xu H, Chen Y, Chen X",
    "express": "Optics letters"
  },
  {
    "id": 3,
    "name": "Study on Two-Section DFB Lasers and Laser Arrays Based on the Reconstruction Equivalent Chirp Technique and Their AppLication in Radio-Over-Fiber Systems",
    "src": "../files/a-2015-3.pdf",
    "author": "Zhang Y, Zheng J, Shi Y, Qian Y, Zheng J, Zhang F, et al",
    "express": "IEEE Journal of Selected Topics in Quantum Electronics"
  },
  {
    "id": 4,
    "name": "Experimental Demonstration of a Multicorrugation-Pitch-Modulated (MCPM) DFB Semiconductor Laser Based on Reconstruction-Equivalent-Chirp Technology",
    "src": "../files/a-2015-4.pdf",
    "author": "Zheng J, Zhang Y, Shi Y, Li W, Qiu B, Lu J, et al",
    "express": "IEEE Photonics Journal"
  }
  ],
  // 2014---------------------------------------------
  [
  {
    "id": 1,
    "name": "Microwave Photonic Filter With Two Independently Tunable Passbands Using a Phase Modulator and an Equivalent Phase-Shifted Fiber Bragg Grating",
    "src": "../files/a-2014-1.pdf",
    "author": "Gao L, Zheng J, Chen X, Yao J",
    "express": "IEEE Transactions on Microwave Theory and Techniques"
  },
  {
    "id": 2,
    "name": "Multiplexed multi-longitudinal mode fiber laser sensor",
    "src": "../files/a-2014-2.pdf",
    "author": "Huang L, Wang P, Gao L, Zhang T, Chen X",
    "express": "Optics express"
  },
  {
    "id": 3,
    "name": "An Eight-Wavelength BH DFB Laser Array With Equivalent Phase Shifts for WDM Systems",
    "src": "../files/a-2014-3.pdf",
    "author": "Li J, Tang S, Wang J, Liu Y, Chen X, Cheng J",
    "express": "IEEE Photonics Technology Letters"
  },
  {
    "id": 4,
    "name": "Phase-Shifted distributed feedback laser with Linearly chirped grating fabricated by reconstruction equivalent chirp technique",
    "src": "../files/a-2014-4.pdf",
    "author": "Li L, Lu L, Li S, Guo R, Shi Y, Chen X",
    "express": "Optics & Laser Technology"
  },
  {
    "id": 5,
    "name": "Experimental demonstration of a low-cost tunable semiconductor DFB laser for access networks",
    "src": "../files/a-2014-5.pdf",
    "author": "Li L, Tang S, Huang L, Zhang T, Li S, Shi Y, et al",
    "express": "Semiconductor Science and Technology"
  },
  {
    "id": 6,
    "name": "Experimental demonstration of DFB semiconductor lasers with varying longitudinal parameters",
    "src": "../files/a-2014-6.pdf",
    "author": "Gao L, Zheng J, Chen X, Yao J",
    "express": "IEEE Transactions on Microwave Theory and Techniques"
  },
  {
    "id": 7,
    "name": "Corrugation-pitch-modulated DFB semiconductor lasers reaLized by common holographic expoSure",
    "src": "../files/a-2014-7.pdf",
    "author": "Li S, Li L, Shi Y, Cao B, Guo R, Zheng J, et al",
    "express": "Optics Communications"
  },
  {
    "id": 8,
    "name": "Dual-wavelength semiconductor laser array with two asymmetric equivalent distributed phase Shifts",
    "src": "../files/a-2014-8.pdf",
    "author": "Li S, Lu L, Zheng J, Li L, Shi Y, Chen X",
    "express": "Optical Engineering"
  },
  {
    "id": 9,
    "name": "Experimental demonstration of λ/8 DFB semiconductor laser array for 1.3 μm CWDM system",
    "src": "../files/a-2014-9.pdf",
    "author": "Lu L, Huang L, Shi Y, Guo R, Liu R, Li L, et al",
    "express": "Science China Technological Sciences"
  },
  {
    "id": 10,
    "name": "Packaging and testing of multi-wavelength DFB laser array using REC technology",
    "src": "../files/a-2014-10.pdf",
    "author": "Ni Y, Kong X, Gu X, Chen X, Zheng G, Luan J",
    "express": "Optics Communications"
  },
  {
    "id": 11,
    "name": "High channel count and high precision channel spacing multi-wavelength laser array for future PICs",
    "src": "../files/a-2014-11.pdf",
    "author": "Shi Y, Li S, Chen X, Li L, Li J, Zhang T, et al",
    "express": "Scientific reports"
  },
  {
    "id": 12,
    "name": "Improved Single Mode Property of DFB Semiconductor Laser Based on SampLing Technique Using Chirp Compensation",
    "src": "../files/a-2014-12.pdf",
    "author": "Shi Y, Zheng J, Jiang N, Li L, Zhang Y, Qiu B, et al",
    "express": "IEEE Photonics Journal"
  },
  {
    "id": 13,
    "name": "Compact packaging for multi-wavelength DML TOSA",
    "src": "../files/a-2014-13.pdf",
    "author": "Wang J, Liu Y, Chen X, Liu J, Zhu N",
    "express": "Chinese Science Bulletin"
  }
  ],
  // 2013---------------------------------------------
  [
    {
   "id": 1,
   "name": " Tunable Microwave Photonic Filter With a Narrow and Flat-Top Passband",
   "src": "../files/a-2013-1.pdf",
   "author": "Gao L, Chen X, Yao J",
   "express": " IEEE Microwave and Wireless Components Letters"
 },
{
   "id": 2,
   "name": "Photonic Generation of a Phase-Coded Microwave Waveform With Ultrawide Frequency Tunable Range",
   "src": "../files/a-2013-2.pdf",
   "author": "Gao L, Chen X, Yao J",
   "express": "IEEE Photonics Technology Letters"
 },
{
   "id": 3,
   "name": "Simultaneous meaSurement of strain and temperature with a multi-longitudinal mode erbium-doped fiber laser. Optics Communications",
   "src": "../files/a-2013-3.pdf",
   "author": "Gao L, Huang L, Chen L, Chen X",
   "express": "Optics Communications"
 },
{
   "id": 4,
   "name": "Study on fiber ring laser in sensing appLication with beat frequency demodulation. Optics & Laser Technology",
   "src": "../files/a-2013-4.pdf",
   "author": "Gao L, Huang L, Chen L, Chen X",
   "express": "Optics & Laser Technology"
 },
{
   "id": 5,
   "name": "Photonic-assisted microwave frequency multipLication with a tunable multipLication factor. Optics letters",
   "src": "../files/a-2013-5.pdf",
   "author": "Gao L, Liu W, Chen X, Yao J",
   "express": "Optics letters"
 },
{
   "id": 6,
   "name": "Frequency- and Phase-Tunable Optoelectronic Oscillator",
   "src": "../files/a-2013-6.pdf",
   "author": " Gao L, Wang M, Chen X, Yao J",
   "express": "Photonics Technology Letters"
 },
{
   "id": 7,
   "name": "Dual Wavelength Semiconductor Laser Based on Reconstruction-Equivalent-Chirp Technique",
   "src": "../files/a-2013-7.pdf",
   "author": "Li S, Li R, Li L, Liu R, Gao L, Chen X",
   "express": "IEEE Photonics Technology Letters"
 },
{
   "id": 8,
   "name": "First demonstration of 1.3 μm quarter-wavelength Shift distributed feedback (DFB) semiconductor laser based on conventional photoLithography",
   "src": "../files/a-2013-8.pdf",
   "author": " Lu L, Shi Y, Chen X",
   "express": "Science China Technological Sciences"
 },
{
   "id": 9,
   "name": "A novel concavely apodized DFB semiconductor laser using common holographic expoSure",
   "src": "../files/a-2013-9.pdf",
   "author": "Shi Y, Li S, Guo R, Liu R, ZHou Y, Chen X",
   "express": "Optics express"
 },
{
   "id": 10,
   "name": "Study of the Multiwavelength DFB Semiconductor Laser Array Based on the Reconstruction-Equivalent-Chirp Technique",
   "src": "../files/a-2013-10.pdf",
   "author": "Shi Y, Li S, Li L, Guo R, Zhang T, Liu R",
   "express": "Journal of Lightwave Technology"
 },
{
   "id": 11,
   "name": "Dispersion-compensating en/decoder for a time-spreading/wavelength-hopping optical code-division multiplexing (OCDM) system",
   "src": "../files/a-2013-11.pdf",
   "author": "Zheng J, Wang R, PU T, Lu L, Fang T, Su Y, et al",
   "express": "Optica Applicata"
 },
{
   "id": 12,
   "name": "Dual current injection tunable SBG semiconductor laser with asymmetric π equivalent phase Shift",
   "src": "../files/a-2013-12.pdf",
   "author": "ZHou Y, Hou J, Chen X",
   "express": "Microwave and Optical Technology Letters"
 }
  ],
  // 2012---------------------------------------------
  [
    {
   "id": 1,
   "name": "Coupled frequency-doubling optoelectronic oscillator based on polarization modulation and polarization multiplexing",
   "src": "../files/a-2012-1.pdf",
   "author": "Cai S, Pan S, Zhu D, Tang Z, Zhou P, Chen X",
   "express": "Optics Communications.2012;285(6):1140-3"
 },
{
   "id": 2,
   "name": "Multimode fiber laser for simultaneous measurement of strain and temperature based on beat frequency demodulation",
   "src": "../files/a-2012-2.pdf",
   "author": "Gao L, Chen L, Huang L, Chen X",
   "express": "Optics express. 2012;20(20):22517-22"
 },
{
   "id": 3,
   "name": "Simultaneous Measurement of Strain and Load Using a Fiber Laser Sensor",
   "src": "../files/a-2012-3.pdf",
   "author": "GAO L, CHEN L, HUANG L, LIU S, YIN Z, CHEN X",
   "express": "IEEE Sensors Journal. 2012;12(5):1513-7"
 },
{
   "id": 4,
   "name": "Fabricating fiber Bragg gratings with two phase masks based on reconstruction-equivalent-chirp technique",
   "src": "../files/a-2012-4.pdf",
   "author": "GAO L, CHEN X, XIONG J, LIU S, PU T",
   "express": "Optics express. 2012;20(3):2240-5"
 },
{
   "id": 5,
   "name": "A Method of Adjusting Wavelengths of Distributed Feedback Laser Arrays by Injection Current Tuning",
   "src": "../files/a-2012-5.pdf",
   "author": "HOU J, CHEN X, WANG L, CHEN W, ZHU N",
   "express": "IEEE Photonics Journal. 2012;4(6):2189-95"
 },
{
   "id": 6,
   "name": "Experimental demonstration of the three phase shifted DFB semiconductor laser based on Reconstruction-Equivalent-Chirp technique",
   "src": "../files/a-2012-6.pdf",
   "author": "SHI Y, CHEN X, ZHOU Y, LI S, LI L, FENG Y",
   "express": "Optics express. 2012;20(16):17374-9"
 },
{
   "id": 7,
   "name": "Experimental demonstration of eight-wavelength distributed feedback semiconductor laser array using equivalent phase shift",
   "src": "../files/a-2012-7.pdf",
   "author": "SHI Y, CHEN X, ZHOU Y, LI S, LU L, LIU R, et al",
   "express": "Optics letters. 2012;37(16):3315-7"
 },
{
   "id": 8,
   "name": "Improved λ/4 phase-shifted DFB semiconductor laser with spatial hole burning compensation using grating chirp",
   "src": "../files/a-2012-8.pdf",
   "author": "SHI Y, LI S, ZHOU Y, LU L, LI L, FENG Y, et al",
   "express": "Optics & Laser Technology. 2012;44(8):2443-8"
 },
{
   "id": 9,
   "name": "Polarization-modulated analog photonic link with compensation of the dispersion-induced power fading",
   "src": "../files/a-2012-9.pdf",
   "author": "ZHANG H, PAN S, HUANG M, CHEN X",
   "express": "Optics letters. 2012;37(5):866-8"
 }
  ],
  // 2011---------------------------------------------
  [
{
   "id": 1,
   "name": "Photonic integrated technology for multi-wavelength laser emission",
   "src": "../files/a-2011-1.pdf",
   "author": "Chen X, Liu W, An J, Liu Y, Xu K, Wang X, et al",
   "express": "Chinese Science Bulletin"
 },
{
   "id": 2,
   "name": "Fiber-Optic Vibration Sensor Based on Beat Frequency and Frequency-Modulation Demodulation Techniques",
   "src": "../files/a-2011-2.pdf",
   "author": "Gao L, Liu S, Yin Z, Zhang L, Chen L, Chen X",
   "express": "IEEE Photonics Technology Letters"
 },
{
   "id": 3,
   "name": "InfLuence of large signal modulation on photonic UWB generation based on electro-optic modulator.",
   "src": "../files/a-2011-3.pdf",
   "author": "Gu R, Pan S, Chen X, Pan M, Ben D",
   "express": "Optics express"
 },
{
   "id": 4,
   "name": "Design of multiwavelength DFB fiber laser with equivalent phase Shifts",
   "src": "../files/a-2011-4.pdf",
   "author": "Jia L, Yin Z, Zhang L, Chen X",
   "express": "Microwave and Optical Technology Letters"
 },
{
   "id": 5,
   "name": "Dual-wavelength distributed feedback fiber laser based on double expoSure and equivalent phase Shift method",
   "src": "../files/a-2011-5.pdf",
   "author": "Jia L, Yin Z, Zhang L, Chen X",
   "express": "AppLied optics"
 },
{
   "id": 6,
   "name": "Simple hybrid wire-wireless fiber laser sensor by direct photonic generation of beat signal",
   "src": "../files/a-2011-6.pdf",
   "author": "Liu S, Gao L, Yin Z, Shi Y, Zhang L, Chen X, et al",
   "express": "AppLied optics"
 },
{
   "id": 7,
   "name": " Multilongitudinal mode fiber-ring laser sensor for strain meaSurement",
   "src": "../files/a-2011-7.pdf",
   "author": "Liu SL, Shengchun);, Gu RG, Rong);, Gao LG, Liang);, Yin ZY, Zuowei);, Zhang LZ, Liang);, Chen XC,Xiangfei);, et al",
   "express": " Optical Engineering"
 },
{
   "id": 8,
   "name": "An Anti-Symmetric-Sample Grating Structure for Improving the Reconstruction-Equivalent-Chirp Technology",
   "src": "../files/a-2011-8.pdf",
   "author": "Shi Y, ZHou Y, Li S, Guo R, Lu L, Feng Y, et al",
   "express": "IEEE Photonics Technology Letters"
 },
{
   "id": 9,
   "name": "Phase-controlled Superimposed FBGs and their appLications in spectral-phase en/decoding",
   "src": "../files/a-2011-9.pdf",
   "author": "Zheng J, Wang R, Pu T, Lu L, Fang T, Su Y, et al",
   "express": "Optics express"
 }],
 // 2010---------------------------------------------
 [
{
  "id": 1,
  "name": "Dual-wavelength DFB fiber laser based on equivalent phase Shift and double expoSure method",
  "src": "../files/a-2010-1.pdf",
  "author": "Jia L, Zhang L, Yin Z, Chen X, et al",
  "express": "Asia Communications and Photonics Conference and Exhibition"
},
{
  "id": 2,
  "name": "Experimental demonstration of the corrugation pitch modulated DFB semiconductor laser based on the reconstruction-equivalent-chirp technology",
  "src": "../files/a-2010-2.pdf",
  "author": "Li S, Shi Y, Gu R, Chen X, et al",
  "express": "Asia Communications and Photonics Conference and Exhibition"
},
{
  "id": 3,
  "name": "Multi-longitudinal mode fiber laser sensor combining the fiber Bragg grating reflector",
  "src": "../files/a-2010-3.pdf",
  "author": "Liu S, Gao L, Yin Z, Chen X, et al",
  "express": "Asia Communications and Photonics Conference and Exhibition"
},
{
  "id": 4,
  "name": "Multilongitudinal mode fiber laser for strain meaSurement",
  "src": "../files/a-2010-4.pdf",
  "author": "Liu S, Yin Z, Zhang L, Chen X, et al",
  "express": "Optics letters"
},
{
  "id": 5,
  "name": "A fiber laser accelerometer base on the double flexure strips structure",
  "src": "http://proceedings.spiedigitalLibrary.org/proceeding.aspx?articleid=729584",
  "author": "Liu S, Zhang L, Zhu X, Chen X, et al",
  "express": "Photonics Asia 2010"
},
{
  "id": 6,
  "name": "An apodized DFB semiconductor laser reaLized by varying duty cycle of sampLing Bragg grating and reconstruction-equivalent-chirp technology",
  "src": "../files/a-2010-6.pdf",
  "author": "Shi Y, Li S, Li J, et al",
  "express": "Optics Communications"
},
{
  "id": 7,
  "name": "Multiple phase Shifts DFB semiconductor laser based on reconstruction equivalent chirp technology",
  "src": "http://proceedings.spiedigitalLibrary.org/proceeding.aspx?articleid=727660",
  "author": "Shi Y, Li S, Lu L, et al",
  "express": "Photonics Asia 2010"
},
{
  "id": 8,
  "name": "Numerical study of three phase Shifts and dual corrugation pitch modulated (CPM) DFB semiconductor lasers based on reconstruction equivalent chirp technology",
  "src": "../files/a-2010-8.pdf",
  "author": "Y. Shi, X. Tu, S. Li, Y. ZHou, L. Jia, and X. Chen",
  "express": "Chinese Science Bulletin"
},
{
  "id": 9,
  "name": "Studies on multi-wavelength fiber Bragg grating laser strain sensor",
  "src": "../files/a-2010-9.pdf",
  "author": "Z. Yin, S. Liu, L. Zhang, L. Gao, and X. Chen",
  "express": "Optics Communications"
},
{
  "id": 10,
  "name": "A novel chirp-coded en/decoder for coherent 2D time-wavelength OCDMA systems",
  "src": "../files/a-2010-10.pdf",
  "author": "J. Zheng, R. Wang, T. Pu, L. Lu, T. Fang, Y. Cheng, et al",
  "express": "Microwave and Optical Technology Letters"
},
{
  "id": 11,
  "name": "A special sampLing technology for sampled grating laser",
  "src": "http://proceedings.spiedigitalLibrary.org/proceeding.aspx?articleid=1348029",
  "author": "Y. ZHou, Y. Shi, S. Li, and X. Chen",
  "express": "Photonics Asia 2010"
},
{
  "id": 12,
  "name": "Asymmetrical sampLing structure to improve the single-longitudinal-mode property based on reconstruction-equivalent-chirp technology",
  "src": "../files/a-2010-12.pdf",
  "author": "Y. ZHou, Y. Shi, S. Li, S. Liu, and X. Chen",
  "express": "Optics letters"
},
{
  "id": 13,
  "name": "Fiber Ring Laser Sensor for Temperature MeaSurement",
  "src": "../files/a-2010-13.pdf",
  "author": "Yin Z, Gao L, Liu S, et al",
  "express": "Journal of Lightwave Technology"
}]
];
console.log(Array.isArray(papers));
console.log(Array.isArray(papers[1]));
