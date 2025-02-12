document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('student-menu');
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress');
    const leaderIndicator = document.querySelector('.leader-indicator');
    let leaderIndicatorShown = true;
    const studentsIndicator = document.querySelector('.students-indicator'); // Объявление здесь

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeMenu();
        }
    });

    // Убираем прелоадер после полной загрузки страницы
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = 0;
            preloader.style.visibility = 'hidden';
            document.body.style.overflow = 'auto'; // Включаем прокрутку
        }, 4000); // Заставка на 8 секунд
    });

    // Анимация полосы загрузки
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 40); // 8 секунд для полной загрузки

    // Скрытие индикатора руководителей после первого скролла
    window.addEventListener('scroll', function() {
        if (leaderIndicatorShown) {
            leaderIndicator.style.opacity = 0;
            leaderIndicatorShown = false;
        }
    });

    // Функция для скрытия индикатора руководителей направлений
    function hideStudentsIndicator() {
        studentsIndicator.style.opacity = 0;
        studentsIndicator.style.visibility = 'hidden';
    }

    // Задержка перед скрытием (5 секунд = 5000 миллисекунд)
    setTimeout(hideStudentsIndicator, 9000); // setTimeout здесь
});

// Данные об учениках (вынес сюда для удобства редактирования и читаемости)
const studentData = {
    student1: {
        name: 'Валерия Кривошапова, 10 "А"',
        details: 'В кружке волонтёрства ученики занимаются организацией благотворительных акций и мероприятий. Их цель — помощь тем, кто в ней нуждается, и развитие культуры добровольчества среди школьников.',
        location: 'Кабинет 307',
        photo: 'images/student1.jpg'
    },
    student2: {
        name: 'Екатерина Гусакова и Степан Коржов, 10 "А"',
        details: 'Участники кружка занимаются созданием школьных медиа: они пишут новости, делают фото- и видеорепортажи о важных событиях. Их задача — своевременно и интересно рассказывать о жизни школы, поддерживая информированность учеников и учителей.',
        location: 'Кабинет 307',
        photo: 'images/student2.jpg'
    },
    student3: {
        name: 'Екатерина Худякова, 9 "В"',
        details: ' Кружок "Первый помощник" - для доп. информации обращаться Екатерине.',
        location: 'Кабинет 301',
        photo: 'images/student3.jpg'
    },
    student4: {
        name: 'Софья Гиммельфарб и Валерия Замула, 10 "А"',
        details: 'Кружок занимается творческими проектами и культурными мероприятиями школы. Участники создают художественные работы, организуют выставки, спектакли и концерты, способствуя развитию культурной среды и вдохновляя учеников на творчество.',
        location: 'Кабинет 307',
        photo: 'images/student4.jpg'
    },
    student5: {
        name: 'Белик Диана, 10 "А"',
        details: 'Участники кружка пропагандируют здоровый образ жизни среди школьников. Они организуют спортивные соревнования, фитнес-акции и обучающие занятия по здоровью, мотивируя других к физической активности и заботе о себе.',
        location: 'Кабинет 307',
        photo: 'images/student5.jpg'
    },
    student6: {
        name: 'Елизавета Момот, 9 "А"',
        details: ' Этот кружок сосредоточен на поддержании и развитии патриотических ценностей. Участники организуют мероприятия, посвящённые исторической памяти, проводят акции и уроки, чтобы сохранить важные моменты истории и укрепить любовь к Родине среди учеников.',
        location: 'Кабинет 307',
        photo: 'images/student6.jpg'
    }
};

function openMenu(studentId) {
    const modal = document.getElementById('student-menu');
    const studentName = document.getElementById('student-name');
    const studentDetails = document.getElementById('student-details');
    const studentLocation = document.getElementById('student-location');
    const modalPhoto = document.getElementById('modal-photo');

    const student = studentData[studentId]; // Получаем данные об ученике по ID

    if (student) {
        studentName.innerText = student.name;
        studentDetails.innerText = student.details;
        studentLocation.innerText = student.location;
        modalPhoto.src = student.photo;

        modal.style.display = "flex";
    } else {
        console.error(`Student data not found for ID: ${studentId}`);
    }
}

function closeMenu() {
    const modal = document.getElementById('student-menu');
    modal.style.display = "none";
}
