const thumbUp = document.getElementsByClassName('fa-thumbs-up')
const trash = document.getElementsByClassName('fa-trash')



function like(rapperId) {
    fetch(`/increment-like/${rapperId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (res.ok) {
            console.log('Like incremented in the database');
        } else {
            console.error('Failed to increment like');
        }
    })
    .catch(err => {
        console.error('Error incrementing like', err);
    });
}

function del(rapperId) {
    fetch(`/delete-rapper/${rapperId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (res.ok) {
            console.log('rapper deleted')
            window.location.href = '/';
        }
    })
    .catch(err => {
        console.error('Error Removing rapper')
    })

}

Array.from(thumbUp).forEach(e => {
    e.addEventListener('click', function () {
        const rapperId = e.getAttribute('data-id');
        like(rapperId)
    })

})

Array.from(trash).forEach(e => {
    e.addEventListener('click', function () {
        const rapperId = e.getAttribute('data-id')
        del(rapperId)
    })
})