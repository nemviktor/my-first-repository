let data1 = {
    photo: 'images/ben-white.jpg',
    title: 'Ben White: Laughing little kid',
    description: 'Happiness is in every true laugh!'
  };
let data2 = {
    photo: 'images/cristian-newman.jpg',
    title: 'Cristian Newman: Kissing couple',
    description: 'Kiss as often as you can!'
  };
let data3 = {
    photo: 'images/helena-lopes.jpg',
    title: 'Helena Lopes: Friendship',
    description: 'Friendships are the most important relationships in life.'
  };
let data4 = {
    photo: 'images/jared-rice.jpg',
    title: 'Jared Rice: Meditation',
    description: 'Find your inner peace!'
  };
let data5 = {
    photo: 'images/kendra-allen.jpg',
    title: 'Kendra Allen: Wedding',
    description: 'Marry the girl you love!'
  };
let data6 = {
    photo: 'images/nathan-anderson.jpg',
    title: 'Nathan Anderson: Father and son',
    description: 'Enjoy every moment with the loved ones!'
  };
let data7 = {
    photo: 'images/priscilla-du-preez.jpg',
    title: 'Priscilla du Preez: Hiking',
    description: 'Explore nature where you can find the way back to our roots.'
  };
let dataALL = [data1,data2,data3,data4,data5,data6,data7]
let currentPhoto = 0;
let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', dataALL[photoNumber].photo);
  $('#photo-title').text(dataALL[photoNumber].title);
  $('#photo-description').text(dataALL[photoNumber].description);
  $('.thumbs').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberIndex = parseInt(indexClicked);
    photoNumber = numberIndex;
    $('#photo').attr('src', dataALL[photoNumber].photo);
    $('#photo-title').text(dataALL[photoNumber].title);
    $('#photo-description').text(dataALL[photoNumber].description);
    currentPhoto = photoNumber;
  });
}

$('#rightarrow').click(() => {
  if (currentPhoto < (dataALL.length-1)) {
    currentPhoto++;
  }
  else{
    currentPhoto = 0;
  }
  loadPhoto(currentPhoto);
})
$('#leftarrow').click(() => {
  if (currentPhoto != 0) {
    currentPhoto--;
  }
  else {
    currentPhoto = (dataALL.length-1);
  };
  loadPhoto(currentPhoto);
})

dataALL.forEach((item,index)=>{
  $(`.thumbs-container`).append(`<div class="thumbsdiv" id="${index}"><p class="title">"${item.title}"</p></div>`);
  $("#"+index).append(`<img class="thumbs" src="${item.photo}" data-index="${index}"></img>`);
}); 

loadPhoto(currentPhoto);