// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }
  
//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}


  //P: strings
  //R: return the other complementary side, turning "A" => "T" as "C" => "G"

  //E: 
        dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
        dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
        dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

  //P: So we what ever value we put in we should get the counter part and return it