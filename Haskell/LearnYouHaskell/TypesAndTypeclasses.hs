-- define explicit type declaration on self written functions
rNUC :: [Char] -> [Char] -- takes one string as aparameter and returnes one string | [Char] == String
rNUC st = [ c | c <- st, c `elem` ['A'..'Z']]

-- another example
addThree :: Int -> Int -> Int -> Int  
addThree x y z = x + y + z  

-- what is "a"?
:t head
head :: [a] -> a -- a meand automatic
-- same with fst
:t fst 
fst :: (a,b) -> a

-- ordering type
:t (>)
(>) :: (Ord a) => a -> a -> Bool 

-- possible
read "True" || False  -- out: True  
read "8.2" + 3.8  -- out: 12.0  
read "5" - 2  -- out: 3  
read "[1,2,3,4]" ++ [3]  -- out: [1,2,3,4,3]  
-- not possible
read "4"

-- explizit specifying a type
read "5" :: Int
read "5" :: Float
(read "5" :: Float) * 4
read "[1,2,3,4]" :: [Int]  
read "(3, 'a')" :: (Int, Char)  

-- upper and lower bound
minBound :: Int  
maxBound :: Char 
maxBound :: Bool  
minBound :: Bool  