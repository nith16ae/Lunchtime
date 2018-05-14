$(document).ready(() => {

    showUsersTime1();
    showUsersTime2();
    showUsersTime3();

    setInterval(function(){
        showUsersTime1();
        showUsersTime2();
        showUsersTime3();
    }, 5000);

    $('#whoPopup').hide();

    function showUsersTime1() {
        SDK.Users.time1( (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("400 - Shit don't work yo!");
            } else if (err) {
                alert("ERROR is " + err);
                return console.log("Bad stuff happened", err)
            } else {
                $('.otherButton1').html('<b>'+ data +' tilmeldte</b><br>Se tilmeldte');
            }
        });
    }

    function showUsersTime2() {
        SDK.Users.time2( (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("400 - Shit don't work yo!");
            } else if (err) {
                alert("ERROR is " + err);
                return console.log("Bad stuff happened", err)
            } else {
                $('.otherButton2').html('<b>'+ data +' tilmeldte</b><br>Se tilmeldte');
            }
        });
    }

    function showUsersTime3() {
        SDK.Users.time3( (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("400 - Shit don't work yo!");
            } else if (err) {
                alert("ERROR is " + err);
                return console.log("Bad stuff happened", err)
            } else {
                $('.otherButton3').html('<b>'+ data +' tilmeldte</b><br>Se tilmeldte');
            }
        });
    }





    // Automatic current date

    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate= dd + "-" +( MM+1) + "-" + yyyy;

    $('#time').text(""+ currentDate +"");




    // Pick time slot 11.30 - 12.00
    $('#time1').click((e) => {
        e.preventDefault();

      if ($('#time2').hasClass("chosen") || $('#time3').hasClass("chosen")) {
          window.alert("Fravælg venligst din valgte tid, før du ændrer dit valg");
      }
      else {
          if ($('select :selected').text() === "Medarbejder") {
              window.alert("Vælg venligst dit navn fra menuen ovenfor");
          } else {

              $('#time1').toggleClass("chosen");
              if ($('#time1').hasClass("chosen")) {
                  $('#time1').html("<b>Tiden er valgt!</b><br>11.30 - 12.00</p>");

                  var user = $('#select :selected').text();

                  var choice = {
                      durationId: 1,
                      user: user
                  };

                  SDK.Choice.time1(choice, (err, data) => {
                      if (err && err.xhr.status === 401) {
                          $(".form-group").addClass("has-error");
                          return alert("400 - Shit don't work yo!");
                      } else if (err) {
                          alert("ERROR is " + err);
                          return console.log("Bad stuff happened", err)
                      } else {
                          console.log(data);
                      }


                  });
              } else {
                  $('#time1').html("<b>Vælg tid</b><br>11.30 - 12.00");

                  var user = $('#select :selected').text();

                  var choice = {
                      durationId: 1,
                      user: user
                  };
                  SDK.Choice.reverse(choice, (err, data) => {
                      if (err && err.xhr.status === 401) {
                          $(".form-group").addClass("has-error");
                          return alert("400 - Shit don't work yo!");
                      } else if (err) {
                          alert("ERROR is " + err);
                          return console.log("Bad stuff happened", err)
                      } else {
                          console.log(data);
                      }


                  });


              }
          }}
    });

    // Pick time slot 12.00 - 12.30
    $('#time2').click((e) => {
        e.preventDefault();

        if ($('#time3').hasClass("chosen") || $('#time1').hasClass("chosen")) {
            window.alert("Fravælg venligst din valgte tid, før du ændrer dit valg");
        }
        else {
            if ($('select :selected').text() === "Medarbejder") {
                window.alert("Vælg venligst dit navn fra menuen ovenfor");
            } else {

                $('#time2').toggleClass("chosen");
                if ($('#time2').hasClass("chosen")) {
                    $('#time2').html("<b>Tiden er valgt!</b><br>12.00 - 12.30</p>");

                    var user = $('#select :selected').text();

                    var choice = {
                        durationId: 2,
                        user: user
                    };

                    SDK.Choice.time2(choice, (err, data) => {
                        if (err && err.xhr.status === 401) {
                            $(".form-group").addClass("has-error");
                            return alert("400 - Shit don't work yo!");
                        } else if (err) {
                            alert("ERROR is " + err);
                            return console.log("Bad stuff happened", err)
                        } else {
                            console.log(data);
                        }


                    });
                } else {
                    $('#time2').html("<b>Vælg tid</b><br>12.00 - 12.30");

                    var user = $('#select :selected').text();

                    var choice = {
                        durationId: 2,
                        user: user
                    };
                    SDK.Choice.reverse(choice, (err, data) => {
                        if (err && err.xhr.status === 401) {
                            $(".form-group").addClass("has-error");
                            return alert("400 - Shit don't work yo!");
                        } else if (err) {
                            alert("ERROR is " + err);
                            return console.log("Bad stuff happened", err)
                        } else {
                            console.log(data);
                        }


                    });
                }
            }}
    });

    // Pick time slot 12.30 - 13.00
    $('#time3').click((e) => {
        e.preventDefault();

        if ($('#time2').hasClass("chosen") || $('#time1').hasClass("chosen")) {
            window.alert("Fravælg venligst din valgte tid, før du ændrer dit valg");
        }
        else {
            if ($('select :selected').text() === "Medarbejder") {
                window.alert("Vælg venligst dit navn fra menuen ovenfor");
            } else {


                $('#time3').toggleClass("chosen");
                if ($('#time3').hasClass("chosen")) {
                    $('#time3').html("<b>Tiden er valgt!</b><br>12.30 - 13.00</p>");

                    var user = $('#select :selected').text();

                    var choice = {
                        durationId: 3,
                        user: user
                    };

                    SDK.Choice.time3(choice, (err, data) => {
                        if (err && err.xhr.status === 401) {
                            $(".form-group").addClass("has-error");
                            return alert("400 - Shit don't work yo!");
                        } else if (err) {
                            alert("ERROR is " + err);
                            return console.log("Bad stuff happened", err)
                        } else {
                            console.log(data);
                        }

                    });
                } else {
                    $('#time3').html("<b>Vælg tid</b><br>12.30 - 13.00");

                    var user = $('#select :selected').text();

                    var choice = {
                        durationId: 3,
                        user: user
                    };
                    SDK.Choice.reverse(choice, (err, data) => {
                        if (err && err.xhr.status === 401) {
                            $(".form-group").addClass("has-error");
                            return alert("400 - Shit don't work yo!");
                        } else if (err) {
                            alert("ERROR is " + err);
                            return console.log("Bad stuff happened", err)
                        } else {
                            console.log(data);
                        }


                    });
                }
            }}
    });

    $('#whoPopup').click((e) => {
        e.preventDefault();
        $('#whoPopup').hide(500);
    });


    $('.otherButton1').click((e) => {
        e.preventDefault();
        $('#whoPopup').toggle("show");

        SDK.Users.time1SpecificUsers( (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("400 - Shit don't work yo!");
            } else if (err) {
                alert("ERROR is " + err);
                return console.log("Bad stuff happened", err)
            } else {
                // Append hver navn i en liste i div #whoPopup
            }


        });

    });

    $('.otherButton2').click((e) => {
        e.preventDefault();
        $('#whoPopup').toggle("show");

        SDK.Users.time2SpecificUsers( (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("400 - Shit don't work yo!");
            } else if (err) {
                alert("ERROR is " + err);
                return console.log("Bad stuff happened", err)
            } else {
                // Append hver navn i en liste i div #whoPopup
            }


        });
    });

    $('.otherButton3').click((e) => {
        e.preventDefault();
        $('#whoPopup').toggle("show");

        SDK.Users.time3SpecificUsers( (err, data) => {
            if (err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
                return alert("400 - Shit don't work yo!");
            } else if (err) {
                alert("ERROR is " + err);
                return console.log("Bad stuff happened", err)
            } else {
                // Append hver navn i en liste i div #whoPopup
            }


        });
    });


});