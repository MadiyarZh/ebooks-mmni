function testing(tests, answers) {

    var tContainer = $('#tests'),
        correctAnswers=[];


    for (var i = 0; i < tests.length; i++) {

        var item = $('<div />');
        item.addClass('item');
        tContainer.append(item);

        var title = $('<div />');
        title.addClass('title');
        item.append(title);

        title.text((i+1)+ ') '+tests[i].title);

        var qContainer = $('<div />');
        qContainer.addClass('questions');
        item.append(qContainer);

        var oContainer = $('<ul />');

        qContainer.append(oContainer);

        var oItemA = $('<li />');
        var optionA = $('<input type="radio" name="q'+(i+1)+'" />');
        var oDataA =  $('<span />');
        oItemA.addClass('option');
        oDataA.text(tests[i].optionA);
        optionA.on('click',function (e) {
            var q =$(this).attr('name');
            var qO =answers[q];
            if (qO == 'A') {
                correctAnswers[q] = 1;
            }else{
                correctAnswers[q] = 0;
            }
        });
        oItemA.append(optionA);
        oItemA.append(oDataA);
        oContainer.append(oItemA);



        var oItemB = $('<li />');
        var optionB = $('<input type="radio" name="q'+(i+1)+'" />');
        var oDataB =  $('<span />');
        oItemB.addClass('option');
        oDataB.text(tests[i].optionB);
        optionB.on('click',function (e) {

            var q =$(this).attr('name');
            var qO =answers[q];
            if (qO == 'B') {
                correctAnswers[q] = 1;
            }else{
                correctAnswers[q] = 0;
            }
        });
        oItemB.append(optionB);
        oItemB.append(oDataB);
        oContainer.append(oItemB);

        var oItemC = $('<li />');
        var optionC = $('<input type="radio" name="q'+(i+1)+'" />');
        var oDataC =  $('<span />');
        oItemC.addClass('option');
        oDataC.text(tests[i].optionC);
        optionC.on('click',function (e) {

            var q =$(this).attr('name');
            var qO =answers[q];
            if (qO == 'C') {
                correctAnswers[q] = 1;
            }else{
                correctAnswers[q] = 0;
            }
        });
        oItemC.append(optionC);
        oItemC.append(oDataC);
        oContainer.append(oItemC);

        var oItemD = $('<li />');
        var optionD = $('<input type="radio" name="q'+(i+1)+'" />');
        var oDataD =  $('<span />');
        oItemD.addClass('option');
        oDataD.text(tests[i].optionD);
        optionD.on('click',function (e) {

            var q =$(this).attr('name');
            var qO =answers[q];
            if (qO == 'D') {
                correctAnswers[q] = 1;
            }else{
                correctAnswers[q] = 0;
            }
        });
        oItemD.append(optionD);
        oItemD.append(oDataD);
        oContainer.append(oItemD);

        var oItemE = $('<li />');
        var optionE = $('<input type="radio" name="q'+(i+1)+'" />');
        var oDataE =  $('<span />');
        oItemE.addClass('option');
        oDataE.text(tests[i].optionE);
        optionE.on('click',function (e) {

            var q =$(this).attr('name');
            var qO =answers[q];
            if (qO == 'E') {
                correctAnswers[q] = 1;
            }else{
                correctAnswers[q] = 0;
            }
        });
        oItemE.append(optionE);
        oItemE.append(oDataE);
        oContainer.append(oItemE);
    }


    var result = $('#result-popup');

    result.on('click',function(e){

        var countCorrectAnswers = 0;

        for(var i in correctAnswers){
            if(correctAnswers[i]==true){
                countCorrectAnswers++;
            };
        }

        $('#test-result').html('Правильных ответов: '+countCorrectAnswers);

        $('#result').bPopup();
    });


}