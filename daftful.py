from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process_data', methods=['POST'])
def get_recs():
    info = request.form
    
    likes = info[0]
    dislikes = info[1]
    
    new_movies = []
    
    if len(likes) > 0 or len(dislikes) > 0:
        pass
    
    # no prefs. get five random, high score movies
    else:
        pass
    
    
    return jsonify(new_movies)
    
@app.route('/')
def start():
    return open("index.html").read()

if __name__ == '__main__':
    app.run()