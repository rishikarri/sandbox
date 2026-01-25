def find_value_of_first_bit(n: int) -> int:
    """
    Returns the value of the "right-most" bit of n.
    """
    mask = 1 # 001
    
    # We use bitwise AND to filter out everything except the first bit
    if n & mask:
        return 1
    else:
        return 0

# Example usage with dynamic values
print(f"Value for 5: {find_value_of_first_bit(5)}")   # Binary 101 -> 1
print(f"Value for 4: {find_value_of_first_bit(4)}")   # Binary 100 -> 0