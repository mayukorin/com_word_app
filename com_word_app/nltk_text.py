from nltk.tokenize import word_tokenize
from nltk.stem.porter import PorterStemmer
print(word_tokenize("abc de"))
stem = PorterStemmer()
print(stem.stem('swimming'))
