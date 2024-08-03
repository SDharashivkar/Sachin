import React from 'react';

const Books = () => {
  const books = [
    {
      title: "Snowball: Warren Buffett and the Business of Life",
      author: "Alice Schroeder",
      link: "https://www.amazon.in/Snowball-Warren-Buffett-Business-Life/dp/0553384619",
      category: "Non-fiction",
      coverUrl: "https://m.media-amazon.com/images/I/617Kb1klhRL._SY342_.jpg"
    },
    {
      title: "Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger",
      author: "Charlie Munger",
      link: "https://www.amazon.in/Poor-Charlies-Almanack-Wisdom-Charles/dp/1578645018",
      category: "Non-fiction",
      coverUrl: "https://m.media-amazon.com/images/I/81bvEcXd0yL._SX445_.jpg"
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      link: "https://www.amazon.in/Steve-Jobs-Walter-Isaacson/dp/034914043X",
      category: "Non-fiction",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL.jpg"
    },
    {
      title: "Influence: The Psychology of Persuasion",
      author: "Robert Cialdini",
      link: "https://www.amazon.in/influence-Psychology-Persuasion-Business-Essentials/dp/006124189X",
      category: "Non-fiction",
      coverUrl: "https://m.media-amazon.com/images/I/61wwAomEffL._SY342_.jpg"
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
      category: "Non-fiction",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51PWIy1rHUL.jpg"
    },
    {
      title: "Man's Search for Meaning",
      author: "Viktor E. Frankl",
      link: "https://www.amazon.in/Mans-Search-Meaning-Viktor-Frankl/dp/1846041244",
      category: "Non-fiction",
      coverUrl: "https://m.media-amazon.com/images/I/61157LApbuL._SY342_.jpg"
    },
    {
      title: "Hackers and Painters",
      author: "Paul Graham",
      link: "https://www.amazon.in/Hackers-Painters-Paul-Graham/dp/1449389554",
      category: "Non-fiction",
      coverUrl: "https://m.media-amazon.com/images/I/51Rxed9CgdL._SY445_SX342_.jpg"
    },
    {
      title: "The Power Broker",
      author: "Robert Caro",
      link: "https://en.wikipedia.org/wiki/The_Power_Broker",
      category: "Non-fiction",
      coverUrl: "https://m.media-amazon.com/images/I/41GGwF8KUGL._SY445_SX342_.jpg"
    },
    {
      title: "Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      link: "https://www.amazon.com/Hitchhikers-Guide-Galaxy-Douglas-Adams/dp/0345391802",
      category: "Fiction",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81XSN3hA5gL.jpg"
    },
    {
      title: "A Song of Ice and Fire",
      author: "George R.R. Martin",
      link: "https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire",
      category: "Fiction",
      coverUrl: "https://m.media-amazon.com/images/I/51LEuIFYBgL._SY445_SX342_.jpg"
    },
    {
      title: "The Fountainhead",
      author: "Ayn Rand",
      link: "https://www.amazon.in/Fountainhead-Ayn-Rand-ebook/dp/B002OSXDAU",
      category: "Fiction",
      coverUrl: "https://m.media-amazon.com/images/I/912N-A-rtxL._SY342_.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Books I Recommend</h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          A curated collection of books that have shaped my thinking and perspective.
        </p>

        {['Non-fiction', 'Fiction'].map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {books.filter(book => book.category === category).map((book, index) => (
                <a
                  key={index}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="h-64 overflow-hidden">
                    <img src={book.coverUrl} alt={book.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-gray-600">{book.author}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700">
            Have a book recommendation? I'd love to hear it!
          </p>
          <a href="mailto:sachin.dharashivkar@gmail.com" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Suggest a Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default Books;