import random

# matriz = [[1,2,3], [4,5,6], [7,8,9]]
# m1 = [[0,1,7], [6,1,2], [0,2,4]]
# b2 = []

# count = 0
# for fil in matriz:
#     for colum in fil:
#         a = random.randint(0, 9)
#         fil[count] = a
#         count += 1
#     count = 0
#     print(fil)

# for fil in m1:
#     for date in fil:
#         b2.append(date)

# for num in b2:
#     z = b2.count(num)
#     print("El numero", num, "aparece", z)

## ESCRIBA UNA FUNCION QUE RECIBA UN ARREGLO DE ENTEROS Y RETORNE EL ULTIMO UNICO ENTERO

# def unique_numb():
arr = [1,2,0,1,2]
arr2 = []

for numb in arr:
    z = arr.count(numb)
    #print("esto es z", z)
    if numb not in arr2 and z == 1:
        arr2.append(numb)
if len(arr2) == 0:
    print("Null")
else:
    print("Tu resultado es", arr2[-1])

    
    
        


#        [3,2 1] => 1
# [3,1,2,1] => 2
# [1,3,2,3,0,4,1] => 4
# [1,2,1,2] => Null
# [1,2,0,1,2] => 0 