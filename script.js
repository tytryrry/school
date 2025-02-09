document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('student-menu');
    const preloader = document.querySelector('.preloader');

    window.onclick = function(event) {
        if (event.target === modal) {
            closeMenu();
        }
    };

    // Убираем прелоадер после загрузки контента
    window.onload = function() {
        preloader.style.display = 'none';
        document.body.style.overflow = 'auto'; // Включаем прокрутку
    };
});

function openMenu(student) {
    const modal = document.getElementById('student-menu');
    const studentName = document.getElementById('student-name');
    const studentDetails = document.getElementById('student-details');
    const studentLocation = document.getElementById('student-location');
    const modalPhoto = document.getElementById('modal-photo');

    if (student === 'student1') {
        studentName.innerText = 'Валерия Кривошапова, 10 "А"';
        studentDetails.innerText = 'В кружке волонтёрства ученики занимаются организацией благотворительных акций и мероприятий. Их цель — помощь тем, кто в ней нуждается, и развитие культуры добровольчества среди школьников.';
        studentLocation.innerText = 'Кабинет 307';
        modalPhoto.src = 'images/student1.jpg';
    } else if (student === 'student2') {
        studentName.innerText = 'Екатерина Гусакова и Степан Коржов, 10 "А"';
        studentDetails.innerText = 'Участники кружка занимаются созданием школьных медиа: они пишут новости, делают фото- и видеорепортажи о важных событиях. Их задача — своевременно и интересно рассказывать о жизни школы, поддерживая информированность учеников и учителей.';
        studentLocation.innerText = 'Кабинет 307';
        modalPhoto.src = 'images/student2.jpg';
    } else if (student === 'student3') {
        studentName.innerText = 'Екатерина Худякова, 9 "В"';
        studentDetails.innerText = ' Кружок "Первый помощник" - для доп. информации обращаться Екатерине.';
        studentLocation.innerText = 'Кабинет 301';
        modalPhoto.src = 'images/student3.jpg';
    } else if (student === 'student4') {
        studentName.innerText = 'Софья Гиммельфарб и Валерия Замула, 10 "А"';
        studentDetails.innerText = 'Кружок занимается творческими проектами и культурными мероприятиями школы. Участники создают художественные работы, организуют выставки, спектакли и концерты, способствуя развитию культурной среды и вдохновляя учеников на творчество.';
        studentLocation.innerText = 'Кабинет 307';
        modalPhoto.src = 'images/student4.jpg';
    } else if (student === 'student5') {
        studentName.innerText = 'Белик Диана, 10 "А"';
        studentDetails.innerText = 'Участники кружка пропагандируют здоровый образ жизни среди школьников. Они организуют спортивные соревнования, фитнес-акции и обучающие занятия по здоровью, мотивируя других к физической активности и заботе о себе.';
        studentLocation.innerText = 'Кабинет 307';
        modalPhoto.src = 'images/student5.jpg';
    } else if (student === 'student6') {
        studentName.innerText = 'Елизавета Момот, 9 "А"';
        studentDetails.innerText = ' Этот кружок сосредоточен на поддержании и развитии патриотических ценностей. Участники организуют мероприятия, посвящённые исторической памяти, проводят акции и уроки, чтобы сохранить важные моменты истории и укрепить любовь к Родине среди учеников.';
        studentLocation.innerText = 'Кабинет 307';
        modalPhoto.src = 'images/student6.jpg';
    }

    modal.style.display = "flex";
}

function closeMenu() {
    const modal = document.getElementById('student-menu');
    modal.style.display = "none";
}
