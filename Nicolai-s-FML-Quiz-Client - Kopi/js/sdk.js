const SDK = {
    serverURL: "http://localhost:8080/api",
    request: (options, cb) => {

        let headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach((h) => {
                headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
            });
        }

        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            headers: headers,
            contentType: "application/json",
            dataType: "text",
            data: SDK.Encryption.encryptDecrypt(JSON.stringify(options.data)),
            success: (data, status, xhr) => {
                cb(null, JSON.parse(SDK.Encryption.encryptDecrypt(data)), status, xhr);
            },
            error: (xhr, status, errorThrown) => {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });

    },
    Users: {
        time1: (cb) => {
            SDK.request({
                method: "GET",
                url: "/users/time1"
            },
                (err, data) => {
                if (err) return cb(err);

                cb(null);
            })
        },
        time2: (cb) => {
            SDK.request({
                    method: "GET",
                    url: "/users/time2"
                },
                (err, data) => {
                    if (err) return cb(err);

                    cb(null, data);
                })
        },
        time3: (cb) => {
            SDK.request({
                    method: "GET",
                    url: "/users/time3"
                },
                (err, data) => {
                    if (err) return cb(err);

                    cb(null, data);
                })
        },
        time1SpecificUsers: (cb) => {
            SDK.request({
                    method: "GET",
                    url: "/users/time1list"
                },
                (err, data) => {
                    if (err) return cb(err);

                    cb(null, data);
                })
        },
        time2SpecificUsers: (cb) => {
            SDK.request({
                    method: "GET",
                    url: "/users/time2list"
                },
                (err, data) => {
                    if (err) return cb(err);

                    cb(null, data);
                })
        },
        time3SpecificUsers: (cb) => {
            SDK.request({
                    method: "GET",
                    url: "/users/time3list"
                },
                (err, data) => {
                    if (err) return cb(err);

                    cb(null, data);
                })
        },
        findMAKRO: (cb) => {
            SDK.request({
                    method: "GET",
                    url: "/quiz/3"
                },
                (err, data) => {
                    if (err) return cb(err);

                    cb(null, data);
                })
        },
        findVOES: (cb) => {
            SDK.request({
                    method: "GET",
                    url: "/quiz/4"
                },
                (err, data) => {
                    if (err) return cb(err);

                    cb(null, data);
                })
        },
        create: (quiz, cb) => {
            SDK.request({
                method: "POST",
                url: "/quiz",
                data: {
                    courseId: quiz.courseId,
                    quizTitle: quiz.quizTitle
                },
            }, (err, data) => {
                //On login-error
                if (err) return cb(err);

                //data = JSON.parse(data);


                SDK.Storage.persist("quiz ID", data.quizId);
                SDK.Storage.persist("quiz title", quiz.quizTitle);
                SDK.Storage.persist("quiz courseID", quiz.courseId);


                cb(null, data);

            });
        }
    },
    Question: {
        create: (question, cb) => {
            SDK.request({
                method: "POST",
                url: "/question",
                data: {
                    quizId: question.quizId,
                    questionTitle: question.questionTitle
                },
            }, (err, data) => {
                // on login-error
                if (err) return cb(err);

                cb(null, data);

            });
        },
        GetQuestions: (quizID, cb) => {
            SDK.request({
                method: "GET",
                url: "/question/" + quizID + "",

            }, (err, data) => {
                // on login-error
                if (err) return cb(err);

                cb(null, data);

            });
        },
    },
    Choice: {
        time1: (choice, cb) => {
            SDK.request({
                method: "POST",
                url: "/choice",
                data: {
                    time: choice.duration,
                    person: choice.user
                },
            }, (err, data) => {
                // on login-error
                if (err) return cb(err);

                cb(null, data);

            });
        },
        time2: (choice, cb) => {
            SDK.request({
                method: "POST",
                url: "/choice",
                data: {
                    time: choice.duration,
                    person: choice.user
                },
            }, (err, data) => {
                // on login-error
                if (err) return cb(err);

                cb(null, data);

            });
        },
        time3: (choice, cb) => {
            SDK.request({
                method: "POST",
                url: "/choice",
                data: {
                    time: choice.duration,
                    person: choice.user
                },
            }, (err, data) => {
                // on login-error
                if (err) return cb(err);

                cb(null, data);

            });
        },
        reverse: (choice, cb) => {
            SDK.request({
                method: "DELETE",
                url: "/choice",
                data: {
                    time: choice.duration,
                    person: choice.user
                },
            }, (err, data) => {
                // on login-error
                if (err) return cb(err);

                cb(null, data);

            });
        },
        GetChoices: (questionID, cb) => {
            SDK.request({
                method: "GET",
                url: "/choice/" + questionID + "",

            }, (err, data) => {
                // on login-error
                if (err) return cb(err);

                cb(null, data);

            });
        }

    },
    User: {
        findAll: (cb) => {
            SDK.request({method: "GET", url: "/user/getAll"}, cb);
        },
        create: (username, password, firstName, lastName, type, cb) => {
            SDK.request({
                method: "POST",
                url: "/user",
                header: {

                    },
                data: {username: username, password: password, firstName: firstName, lastName: lastName, type: type},
            }, (err, data) => {
                //On login-error
                if (err) return cb(err);


                cb(null, data);

            });
        },
        createAdmin: (username, password, firstName, lastName, type, cb) => {
            SDK.request({
                method: "POST",
                url: "/user",
                data: {username: username, password: password, firstName: firstName, lastName: lastName, type: type},
            }, (err, data) => {
                //On login-error
                if (err) return cb(err);


                cb(null, data);

            });
        },
        delete: (id, cb) => {
            SDK.request({
                    method: "DELETE",
                    url: "/user/" + id,
                    data: {

                    }
                },
                (err) => {
                    if (err) return cb(err);

                    cb(null);
                });
        },
        logOut: () => {
            SDK.Storage.remove("user_id");
            SDK.Storage.remove("user");
            SDK.Storage.remove("type");
            SDK.Storage.remove("firstname");
            SDK.Storage.remove("lastname");
            window.location.href = "LoginPage.html";
        },
        login: (username, password, cb) => {
            SDK.request({
                url: "/user/login",
                method: "POST",
                headers: {

                },
                data: {
                    username: username,
                    password: password
                }
            }, (err, data) => {
                //On login-error
                if (err) return cb(err);

                //data = JSON.parse(data);
                SDK.Storage.persist("user_id", data.userId);
                SDK.Storage.persist("username", data.username);
                SDK.Storage.persist("firstname", data.firstName);
                SDK.Storage.persist("lastname", data.lastName);
                SDK.Storage.persist("type", data.type);

                cb(null, data);

            });

        },
       },
        Storage: {
            prefix: "FMLQUIZ ",
            persist: (key, value) => {
                window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
            },
            load: (key) => {
                const val = window.localStorage.getItem(SDK.Storage.prefix + key);
                try {
                    return JSON.parse(val);
                }
                catch (e) {
                    return val;
                }
            },
            remove: (key) => {
                window.localStorage.removeItem(SDK.Storage.prefix + key);
            }
        },
         Encryption: {

        encryptDecrypt(input) {
            var enc = true;
            if (enc) {
                if (input !== undefined && input.length !== 0) {
                    var key = ['K', 'O', 'C', 'H']; //Can be any chars, and any size array
                    var output = [];
                    for (var i = 0; i < input.length; i++) {
                        var charCode = input.charCodeAt(i) ^ key[i % key.length].charCodeAt(0);
                        output.push(String.fromCharCode(charCode));
                    }
                    return output.join("");
                } else {
                    return input
                }
            }
            else{
                return input;
            }
        }
    }

};