# Building My First Emulator: CHIP-8

Ever since I got into low-level programming, the idea of building an emulator fascinated me. It seemed like the perfect mix of software and hardware simulation, offering a deeper understanding of how machines actually execute instructions. So, I decided to challenge myself by writing a **CHIP-8 emulator** from scratch—and I’m proud to say, I did it.

## 🧠 Why CHIP-8?

CHIP-8 is a great entry point into emulator development. It’s a simple virtual machine originally used on 1970s microcomputers, and it has:

- Only **35 opcodes**
- A small **4K memory space**
- A 64x32 monochrome display
- Hex-based keypad input

Its simplicity makes it ideal for learning the core concepts of emulation without being overwhelmed.

## ⚙️ My Stack

I built the emulator using:

- **C** – for its control over memory and performance
- **SDL2** – to handle graphics and input in a cross-platform way

I chose C because I wanted full control over the hardware emulation and memory layout. SDL2 gave me a lightweight and efficient way to draw the display and read the keypad.

## 🧩 What I Implemented

- **Memory mapping** (fonts, ROM, stack)
- **CPU cycle** with opcode fetching, decoding, and execution
- **Timers** (delay and sound)
- **Graphics rendering** (via SDL2 pixel buffer)
- **Keypad input handling**
- Debugging features to step through instructions and inspect state

## 😵 Challenges Faced

- **Opcode decoding**: Learning how to extract nibbles and match instruction patterns was tricky at first.
- **Timing**: Synchronizing timers and cycles required careful tweaking.
- **Input lag**: At one point, I had inconsistent keypad response—turns out I wasn’t handling SDL events correctly.

## 🕹️ Running Classic Games

Once it was working, I tested it using classic CHIP-8 ROMs like:

- **PONG**
- **TETRIS**
- **BLINKY**

Seeing those games come alive with code I wrote felt magical.

## 🚀 What I Learned

- Deepened my understanding of how CPUs and interpreters work
- Improved my skills in bitwise operations and low-level debugging
- Gained experience with cross-platform graphics using SDL
- Realized how even the simplest systems can have subtle complexity

## 📸 Screenshots

!["ping pong in chip-8"](/assets/projects/chip-8/ping-pong-c8.png)

## 🔗 Future Plans

- Add sound emulation
- Build a disassembler or debugger UI
- Port to the web using WebAssembly and SDL2 or WebGL
- Write a blog series breaking down each part of the emulator

---

If you’re thinking about writing your own emulator, I highly recommend starting with CHIP-8. It’s the perfect sandbox for learning how computers think, and it’s a rewarding project that teaches you so much more than just emulation.

Happy coding!
