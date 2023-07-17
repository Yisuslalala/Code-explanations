products = ["Chamarra", "Lentes", "Audífonos", "Tennis"]

#          ["Chamarra", "Audífonos", "Lentes", "Tennis"]
#          ["Audífonos", "Chamarra", "Lentes", "Tennis"]


def bubble_sort(products: list) -> None:
    n = len(products)
    for i in range(n):  # i = 0,
        for j in range(n - 1 - i):  # n - 1 - 1
            if (products[j] > products[j + 1]):
                products[j], products[j + 1] = products[j + 1], products[j]


def main():
    print("Bubble sort")
    print(products)
    bubble_sort(products)
    print(products)


if __name__ == "__main__":
    main()
