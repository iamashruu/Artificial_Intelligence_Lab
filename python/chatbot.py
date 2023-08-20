import time

now = time.ctime()
dateTime = time.strftime("%Y-%m-%d %H:%M:%S")
keyword_responses = {
    "hello": "Hello!",
    "hi": "Hello!",
    "how are you": "I'm doing well, What about you?",
    "good": "Great!",
    "fine": "Great!",
    "bad": "I'm sorry to hear that.",
    "bye": "Goodbye!",
    "see you later": "See you soon!",
    "have a nice day": "Thank you, you too!",
    "what's your name?": "I am Jhon(AI Chat Bot)",
    "who are you?": "I am Jhon(AI Chat Bot)",
    "what's the time now?": f"The time is {now}.",
    "what's the date of today?": f"The date of today: {dateTime}.",
    "who made you?": "Human",
    "what's your favorite color?": "I don't have a favorite color, as I am a chatbot.",
    "what's your favorite food?": "I don't eat, as I am a chatbot.",
    "what's your favorite movie?": "I don't watch movies, as I am a chatbot.",
    "what do you do for fun?": "I enjoy chatting with people like you!",
    "what's the meaning of life?": "That's a philosophical question that people have been asking for centuries. What do you think the meaning of life is?",
    "tell me a joke": "Why did the tomato turn red? Because it saw the salad dressing!",
    "what's your favorite book?": "I don't have a favorite book, as I am a chatbot.",
    "what's your favorite song?": "I don't have a favorite song, as I am a chatbot.",
    "what do you think of humans?": "I think humans are fascinating creatures with many strengths and weaknesses.",
    "what's the weather like?": "I'm sorry, I don't have access to real-time weather information.",
    "what's your favorite animal?": "I don't have a favorite animal, as I am a chatbot.",
    "what's your favorite sport?": "I don't have a favorite sport, as I am a chatbot.",
    "what's your favorite hobby?": "I don't have hobbies, as I am a chatbot.",
    "what's the capital of France?": "The capital of France is Paris.",
    "what's the highest mountain in the world?": "The highest mountain in the world is Mount Everest.",
    "what's the largest country in the world?": "The largest country in the world by land area is Russia.",
    "what's the smallest country in the world?": "The smallest country in the world by land area is Vatican City.",
    "what's the longest river in the world?": "The longest river in the world is the Nile River in Africa.",
    "what's the highest waterfall in the world?": "The highest waterfall in the world is Angel Falls in Venezuela.",
    "what's the deepest ocean in the world?": "The deepest ocean in the world is the Pacific Ocean.",
    "what's the largest ocean in the world?": "The largest ocean in the world is the Pacific Ocean.",
    "what's the largest desert in the world?": "The largest desert in the world is the Sahara Desert in Africa.",
    "what's the busiest airport in the world?": "The busiest airport in the world is Hartsfield–Jackson Atlanta International Airport in the United States.",
    "what's the tallest building in the world?": "The tallest building in the world is the Burj Khalifa",
    "default": "I'm sorry, I didn't understand that. Can you please rephrase?",
}


def generate_response(user_input):
    for keyword in keyword_responses:
        if user_input.lower() in keyword or keyword in user_input.lower():
            return keyword_responses[keyword]

    return keyword_responses["default"]


while True:
    user_input = input("You: ").strip()

    if user_input == "":
        continue

    response = generate_response(user_input)

    if response in keyword_responses.values():
        print(response)
    else:
        print("I'm sorry, I didn't understand that.")
