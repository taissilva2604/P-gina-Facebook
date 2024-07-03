document.querySelector('.post-box button').addEventListener('click', function() {
    const textarea = document.querySelector('.post-box textarea');
    const photoUpload = document.getElementById('photoUpload');
    const postContent = textarea.value;
    const file = photoUpload.files[0];

    if (postContent && file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const feed = document.querySelector('.feed');
            const newPost = document.createElement('div');
            newPost.classList.add('post');

            const postHeader = document.createElement('div');
            postHeader.classList.add('post-header');

            const postPic = document.createElement('img');
            postPic.src = 'profile.jpg'; // Usar imagem do perfil atual
            postPic.alt = 'User';
            postPic.classList.add('post-pic');

            const postUserInfo = document.createElement('div');

            const postUser = document.createElement('span');
            postUser.classList.add('post-user');
            postUser.textContent = 'Meu Perfil'; // Nome do usuário atual

            const postTime = document.createElement('span');
            postTime.classList.add('post-time');
            postTime.textContent = 'Agora mesmo';

            postUserInfo.appendChild(postUser);
            postUserInfo.appendChild(postTime);
            postHeader.appendChild(postPic);
            postHeader.appendChild(postUserInfo);

            const postContentDiv = document.createElement('div');
            postContentDiv.classList.add('post-content');

            const postText = document.createElement('p');
            postText.textContent = postContent;

            const postPhoto = document.createElement('img');
            postPhoto.src = e.target.result;
            postPhoto.alt = 'Post Photo';
            postPhoto.classList.add('post-photo');

            postContentDiv.appendChild(postText);
            postContentDiv.appendChild(postPhoto);
            newPost.appendChild(postHeader);
            newPost.appendChild(postContentDiv);
            feed.insertBefore(newPost, feed.firstChild);

            textarea.value = '';
            photoUpload.value = '';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, escreva algo e selecione uma foto antes de publicar.');
    }
});
