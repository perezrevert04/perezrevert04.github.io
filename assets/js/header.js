window.onscroll = () => {
    const header = document.getElementById('my-header');
    const myData = document.getElementById('my-data');

    if ( window.scrollY === 0 ) {
        header.classList.remove('box-shadow');
        myData.classList.remove('hidden');
    } else {
        header.classList.add('box-shadow');
        myData.classList.add('hidden');
    }
}
