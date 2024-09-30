const Endpoints = () => {
    const docs = {
        "GET /api": {
            "description": "serves up a json representation of all the available endpoints of the api",
            "queries": [],
            "exampleResponse": {
                "docs": [
                    {
                        "description": "serves...",
                        "queries": [],
                        "exampleResponse": {
                            "eg": [
                                {

                                }
                            ]
                        }
                    }
                ]
            }
        },
        "GET /api/topics": {
            "description": "serves an array of all topics",
            "queries": [],
            "exampleResponse": {
                "topics": [
                    {
                        "slug": "football",
                        "description": "Footie!"
                    }
                ]
            }
        },
        "GET /api/articles": {
            "description": "serves an array of all articles",
            "queries": [
                "author",
                "topic",
                "sort_by",
                "order"
            ],
            "exampleResponse": {
                "articles": [
                    {
                        "title": "Seafood substitutions are increasing",
                        "topic": "cooking",
                        "author": "weegembump",
                        "body": "Text from the article..",
                        "created_at": "2018-05-30T15:59:13.341Z",
                        "votes": 0,
                        "comment_count": 6
                    }
                ]
            }
        },
        "GET /api/articles/:article_id": {
            "description": "serves a specific article by its ID",
            "params": [
                "article_id"
            ],
            "exampleResponse": {
                "article": {
                    "author": "weegembump",
                    "title": "Seafood substitutions are increasing",
                    "article_id": 1,
                    "body": "Text from the article..",
                    "topic": "cooking",
                    "created_at": "2018-05-30T15:59:13.341Z",
                    "votes": 0,
                    "article_img_url": "https://example.com/image.png"
                }
            }
        },
        "GET /api/articles/:article_id/comments": {
            "description": "serves an array of all comments for a specific article, ordered with the most recent comments first",
            "params": [
                "article_id"
            ],
            "exampleResponse": {
                "comments": [
                    {
                        "comment_id": 1,
                        "votes": 10,
                        "created_at": "2018-06-01T08:30:00.000Z",
                        "author": "jessjelly",
                        "body": "Great article!",
                        "article_id": 1
                    },
                    {
                        "comment_id": 2,
                        "votes": 5,
                        "created_at": "2018-06-01T09:00:00.000Z",
                        "author": "tickle122",
                        "body": "Very informative, thanks!",
                        "article_id": 1
                    }
                ]
            }
        },
        "POST /api/articles/:article_id/comments": {
            "description": "adds a comment to a specific article identified by article_id",
            "params": [
                "article_id"
            ],
            "requestBody": {
                "username": "cooljmessy",
                "body": "This is an insightful article. Thanks for sharing!"
            },
            "exampleResponse": {
                "comment": {
                    "comment_id": 101,
                    "votes": 0,
                    "created_at": "2024-09-02T10:45:00.000Z",
                    "author": "cooljmessy",
                    "body": "This is an insightful article. Thanks for sharing!",
                    "article_id": 1
                }
            }
        },
        "PATCH /api/articles/:article_id": {
            "description": "updates the votes of an article by its article_id",
            "params": [
                "article_id"
            ],
            "requestBody": {
                "inc_votes": "Number (positive or negative) to increment or decrement the article's votes"
            },
            "exampleRequest": {
                "inc_votes": 1
            },
            "exampleResponse": {
                "article": {
                    "article_id": 1,
                    "title": "Seafood substitutions are increasing",
                    "topic": "cooking",
                    "author": "weegembump",
                    "body": "Text from the article..",
                    "created_at": "2018-05-30T15:59:13.341Z",
                    "votes": 101,
                    "article_img_url": "https://example.com/image.png"
                }
            }
        },
        "DELETE /api/comments/:comment_id": {
            "description": "Deletes the comment by its comment_id",
            "params": [
                "comment_id"
            ],
            "exampleResponse": {
                "status": 204,
                "msg": "No Content"
            }
        },
        "GET /api/users": {
            "description": "serves an array of all users",
            "queries": [],
            "exampleResponse": {
                "users": [
                    {
                        "username": "butter_bridge",
                        "name": "Jonny",
                        "avatar_url": "https://www.example.com/avatar.jpg"
                    },
                    {
                        "username": "icellusedkars",
                        "name": "Sam",
                        "avatar_url": "https://www.example.com/avatar2.jpg"
                    }
                ]
            }
        }
        ,
    };

    return (
        <div className="api-docs">
            <h2>API Endpoints</h2>
            <ul>
                {Object.entries(docs).map(([endpoint, info]) => (
                    <li key={endpoint}>
                        <h5 style={{ marginTop: '10px', marginBottom: '10px' }}>{endpoint}</h5>
                        <p>{info.description}</p>
                        {info.queries && (
                            <div style={{ marginTop: '10px' }}>
                                Queries: {info.queries.join(", ")}
                            </div>
                        )}
                        <h5>Example Response:</h5>
                        <pre>{JSON.stringify(info.exampleResponse, null, 2)}</pre>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Endpoints;
