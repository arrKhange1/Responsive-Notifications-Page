const notificationTitle = document.querySelector('.notifications__title');
const notificationList = document.querySelector('.notifications__list');
const readAllButton = document.querySelector('.notifications__mark-unread');

function nodeListToArray(notificationList) {
    return [...notificationList.children];
}

function markAllRead(notificationList) {
    const notificationArray = nodeListToArray(notificationList);
    notificationArray.forEach(elem => {
        if (elem.classList.contains('notifications__list-item--unread')) {
            elem.classList.remove('notifications__list-item--unread');
            elem.querySelector('.notifications__text--unread').classList.remove(
                'notifications__text--unread'
            );
        }
    });
}

function countUnreadNotifications(notificationList) {
    const notificationArray = nodeListToArray(notificationList);
    const notificationCount = notificationArray.filter(elem => 
        elem.classList.contains('notifications__list-item--unread')).length;
    return notificationCount;
}

function assignCounter(cnt) {
    notificationTitle.dataset.notificationCnt = cnt;
}

readAllButton.addEventListener('click', e => {
    assignCounter(0);
    markAllRead(notificationList);
});

const notificationCount = countUnreadNotifications(notificationList);
assignCounter(notificationCount);

