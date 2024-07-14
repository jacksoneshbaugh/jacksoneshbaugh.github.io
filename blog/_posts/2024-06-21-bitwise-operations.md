---
layout: post
title: "I wrote an article on bitwise operations"
listed-date: "June 21, 2024"
image: "/images/projects/bitwise.png"
lang: "en"
location: "Bethlehem, PA"
---

Recently, I wrote an article about bitwise operations, which I posted on my GitHub account as a repository (which you
can find [here](https://github.com/jacksoneshbaugh/BitwiseOperations)). I wanted to post the text here, too. I hope you
enjoy it!
---

# Bitwise Operations in C

## Introduction

The goal of this repository is to acquaint you with bitwise operations, explaining what they are, how they work, and
what they can be used for.

## Chapter 1: It's All Binary

In C (and most other high-level languages), our variables have _types_. These types are indicative of a few things. Of
course, a variable of type `int` will store an integer value, but the key to understanding these bitwise operations is
to know that under the hood, all types are stored in memory (anywhere, stack, heap, wherever) as binary. Here's an
example of what happens when you store a simple integer value on the stack in C:

```c
int main(int argc, char** argv) {
    int x = 2;
    return 0;
}
```

After compiling to assembly, the code might look like this (I'm using ARM assembly here, and I've annotated the code
using comments):

```asm
.section .text
.global main

main:
    ; Set up the stack for the function
    stp x29, x30 [sp, -16]! ; Save previous frame pointer & link register
    mov x29, sp ; Setup a new frame pointer
    
    ; Initialize x with 2
    ; IN C: int x = 2;
    mov w0, 2 ; Move 2 into the w0 register
    str w0, [sp, 16] ; Store the contents of w0 (2) at a 16-byte offset from the stack pointer
    ; Essentially, the above line stores 2 on the stack.
    
    mov w0, 0 ; Move 0 into w0, prepare for return
    
    ; Clear stack
    ldp x29, x30, [sp], 32 ; Restore frame pointer and link register
    ret ; Return
```

Note that most compilers would _not_ actually store a variable like the one I showed on the stack, as it is unused.
However, if it is used multiple times, it would be stored on the stack something like the above.

If we looked at the location where our variable was stored on the stack (while it is there, of course), we would see
something like:

| Memory Address | Value Stored (Hex) | Value Stored (Binary) |
|----------------|--------------------|-----------------------|
| `0x1000`       | `0x02`             | `00000010`            |
| `0x1001`       | `0x00`             | `00000000`            |
| `0x1002`       | `0x00`             | `00000000`            |
| `0x1003`       | `0x00`             | `00000000`            |

This assumes that your system is little-endian. I won't go into endianness here, but you can read more about
it [here](https://developer.mozilla.org/en-US/docs/Glossary/Endianness).

The key thing I'd like you to notice about the table above is that even though our integer is only 2 bits long, it takes
up 4 bytes (32 bits) of memory. Now, don't freak out—this is normal and expected. One of the many things that C and your
compiler do is set standards for the types you invoke. So when I create an `int` variable, the compiler knows to
allocate 4 bytes (again, 32 bits) of memory. We can even test this using the `sizeof()` operator in C.

> #### The `sizeof()` Operator
> `sizeof()` is not an actual C function. Instead, at compile time, the compiler replaces the expression with the size
> of the given data type. You can even use this with your own types, like typedefs and/or structs:
>
> ```c
> #include <stdio.h> 
> 
> typedef struct {
>   char name[64];
>   int age;
> } Person;
> 
> int main(int argc, char** argv) {
>   printf("A Person is %lu bytes long.\n", sizeof(Person));
>   return 0;
> }
> ```

One other thing you might be asking is how negative numbers are stored. Excellent question. Numbers can be _signed_ or
_unsigned_, but by default, they're signed. If an integer is signed, it sacrifices its most significant bit to be the "
sign bit." If the sign bit is 1, the number is negative; otherwise it's positive. An astute reader might realize that
the change that happens here is in the range of possible numbers. Consider 8-bit numbers. There are 256 possible numbers
to represent (given by 2^8). With an unsigned 8-bit integer, the values 0–255 can be represented; with a signed 8-bit
int, -128–127 can be represented.

To get the inverse of a binary number, use two's compliment. Let's find -5 in binary.

1. Start with 5. In binary, 5 is `0101`. The leading 0 is the sign.
2. Invert each bit. `0101` &rarr; `1010`.
3. Add 1 to this number (ignoring any possible overflow). `1010 + 0001 = 1011`.

#### Your Turn!

1. Confirm that -5 is `1011` in binary by performing two's compliment on it to get 5, or `0101`.
2. Write a C program that prints the size of an int in both bytes and bits. Use the code above as a starting point.
   *Hint: to convert from bytes to bits, how many bits are in a byte?*
3. Fill in the following table with sizes of different types, modifying your program to check them.

| Type                                         | Size (bytes) | Size (bits) |
|----------------------------------------------|--------------|-------------|
| int                                          |              |             |
| int64_t                                      |              |             |
| int8_t                                       |              |             |
| char                                         |              |             |
| bool (you'll need to `#include <stdbool.h>`) |              |             |
| long int                                     |              |             |
| short int                                    |              |             |
| long long int                                |              |             |
| double                                       |              |             |
| double                                       |              |             |

You can find the solutions to these exercises along with the rest of the article in the repository
linked [here](https://github.com/jacksoneshbaugh/BitwiseOperations).