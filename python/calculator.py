# import re


# def calculate_expression(expression):
#     # Replace 'x' with '*' and '÷' with '/' for consistent evaluation
#     expression = expression.replace("x", "*").replace("÷", "/")

#     # Regular expression to find and evaluate expressions within brackets
#     while "(" in expression or "[" in expression or "{" in expression:
#         expression = re.sub(
#             r"\(([^()]+)\)", lambda match: str(eval(match.group(1))), expression
#         )
#         expression = re.sub(
#             r"\[([^[\]]+)\]", lambda match: str(eval(match.group(1))), expression
#         )
#         expression = re.sub(
#             r"\{([^{}]+)\}", lambda match: str(eval(match.group(1))), expression
#         )

#     result = eval(expression)
#     return result


# while True:
#     user_input = input("Enter an expression (or 'exit' to quit): ")
#     if user_input.lower() == "exit":
#         break

#     try:
#         result = calculate_expression(user_input)
#         print("Result:", result)
#     except Exception as e:
#         print("Error:", e)

from math import sqrt

print("Simple Calculator")

while True:
    try:
        expression = input("Enter an expression (or 'exit' to quit): ")

        if expression.lower() == "exit":
            break

        result = eval(expression)
        print("Result:", result)
    except Exception as e:
        print("Error:", e)
