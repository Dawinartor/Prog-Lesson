-- replace ghci prompt
:set prompt "ghci> "
-- use mathmatical arithmetics
50 * (100 - 4999)  -- output: -244950
-- pitfall: solution needs parrenthes
5 * (-3) -- output: -15
-- boolean opetations also usable
True && False -- output: False
False || True -- output: True
not (True && True) -- output: False
-- testing for equality
5 == 2 + (2 + 1) -- out: True
-- what is with whis?
4 + "Lol" -- doesn't work
"hello" == 5 -- doesn't work, also not
-- using functions
succ 5 -- out: 6
min 5 99 -- out: 5
max 45 54 -- out: 54
-- put functions together
(succ 9) + (max 5 4) + 1 
-- priorities with functions
succ 9 * 10 -- out: 100
succ (9 * 10) -- out: 91
-- cleaner code?
div 92 10 -- out: 9
92 `div` 10 -- out: 9
-- use doubled functions and priority
succ (succ 3) -- 1. (succ 3) = 4 / 2. succ 4
-- Writte a function
myFunction x1 x2 = x1 + x2
myFunction 4 4
-- make modules loadable
module MyFunc where
-- create lists
lostNumbers = [1, 3, 5, 3, 2, 4, 33, 12, 24]
-- add list elements to other list
lostNumbers ++ [55, 55, 55]
-- add strings together
stringOnString = "Hello" ++ " " ++ "World"

-- putt element on end of list
lostNumbers ++ [36, 48] --! iteration through left / but ineffizient with long lists
-- putt element on begining of list
'A' : stringOnString

-- several kind of lists
levelOneList = [] -- empty list
levelTwoList = [[]] -- empty list which contains empty list
levelThreeList =[[],[],[]] -- empty list which contains three empty lists

-- access on specific space of a list / string
stringOnString !! 4 -- out: 'o'
lostNumbers !! 1 -- out: '3'

-- manipulations with lists
b = [[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]
b ++ [[1,1,1,1]
[6,6,6,6]:b
b !! 2

-- comparison of lists
[3,2,1] > [2,1,0]
[3,2,1] > [2,10,100]
[3,4,2] > [3,4]
[3,4,2] > [2,4]
[3,4,2] == [3,4,2]

-- futher functions with lists
head [1,2,3,4] -- out: first element
tail [5,4,3,2,1] -- out: all elements without head
last [3,2,1] -- out: last element
init [9,8,7] -- out: all elements without last element
length [4,44,444,4444] -- out: 4
null [1,2,3] -- out: False
null [] -- out: True
reverse [5,3,1] -- out: [1,3,5]
take 3 [1,2,3,4,55] -- out: [1,2,3]
drop 3 [8,4,2,1,5,6] --out: [1,5,6]
drop 100 [1,2,3,4] -- out: []
minimum [9,21,3,53,22,1] -- out: 1
maximum [0,4,21,2,56,33,99] -- out: 99
sum [4,2,4,5,11,2]
product [1,2,3,4,5,6,7,8,9,99]

-- check if element contains in list
4 `elem` [3,4,5,6]
14 `elem` [3,4,5,6]

-- TODO: Continue with Texas ranges
-- http://learnyouahaskell.com/starting-out#texas-ranges