#include <iostream>
using namespace std;

// Compile a C++ file with "g++ <filename>"
// Run compiled file with ./a.out

class Complex {       // The class
  // Access specifier
  public:             
    int real, imaginary; // real & imaginary part (int variable)

    // Constructor with parameters
    Complex(int a, int b ) {
      real = a;
      imaginary = b;
    }


    void add(int c, int d) {
      this->real = this->real + c;
      this->imaginary = this->imaginary + d;
    }

    void sub(int c, int d) {
      this->real = this->real - c;
      this->imaginary = this->imaginary - d;
    }

    void mul(int c, int d) {
      this->real = (this->real * c) - (this->imaginary * d);
      this->imaginary = (this->real * d) + (this->imaginary * c);
    }

    void div(int c, int d) {
      this->real = ( (this->real * c) + (this->imaginary * d), (this->real * d) + (this->imaginary * c)) ;
      this->imaginary;
    }

    void equ(int c, int d) {
      string equal;

      if (this->real == c & this->imaginary == d) {
        equal = "true";
      } else {
        equal = "false";
      }
      
      cout << equal << "\n";
    }

    void conj() {
      //this->real = this->real;
      this->imaginary = this->imaginary * (-1);
    }

    void show() {
      cout << "real: " << real << " | " << "imaginary:  " << imaginary << "\n";
    }
};

int main() {

  Complex myImaginaryNumOne(2, 2);
  // Test addition
  myImaginaryNumOne.add(3, 3);
  myImaginaryNumOne.show();

  Complex myImaginaryNumTwo(2, 2);
  // Test subtraction
  myImaginaryNumTwo.sub(3, 3);
  myImaginaryNumTwo.show();

  Complex myImaginaryNumThree(2, 2);
  // Test multiplication
  myImaginaryNumThree.mul(3, 3);
  myImaginaryNumThree.show();

  Complex myImaginaryNumFour(2, 2);
  // Test dividing
  myImaginaryNumFour.div(3, 3);
  myImaginaryNumFour.show();

  Complex myImaginaryNumFive(2, 2);
  // Test comparing
  myImaginaryNumFive.equ(2, 2);
  myImaginaryNumFive.show();

  Complex myImaginaryNumSix(2, 2);
  // Test conjugation
  myImaginaryNumSix.conj();
  myImaginaryNumSix.show();

  return 0;
}