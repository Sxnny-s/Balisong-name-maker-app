const thumbUp = document.getElementsByClassName('fa-thumbs-up')
const trash = document.getElementsByClassName('fa-trash')



function like(balisongId) {
    fetch(`/increment-like/${balisongId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (res.ok) {
            console.log('Like incremented in the database');
            window.location.reload();
        } else {
            console.error('Failed to increment like');
        }
    })
    .catch(err => {
        console.error('Error incrementing like', err);
    });
}

function del(balisongId) {
    fetch(`/delete-balisong/${balisongId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (res.ok) {
            console.log('balisong deleted')
            window.location.reload();
        }
    })
    .catch(err => {
        console.error('Error Removing balisong')
    })

}

Array.from(thumbUp).forEach(e => {
    e.addEventListener('click', function () {
        const balisongId = e.getAttribute('data-id');
        like(balisongId)
    })

})

Array.from(trash).forEach(e => {
    e.addEventListener('click', function () {
        const balisongId = e.getAttribute('data-id')
        del(balisongId)
    })
})