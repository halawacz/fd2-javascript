window.onload = createDragAndDrop;

function createDragAndDrop() {
  let pictures = document.querySelectorAll('.imagesToMove');
  let coordinatesX = [];
  let coordinatesY = [];

  pictures.forEach((e) => getOffset(e));
  assignOffset();
  pictures.forEach((e) => makeDraggable(e));

  function getOffset(pic) {
    let x = pic.offsetLeft;
    let y = pic.offsetTop;
    coordinatesX.push(x);
    coordinatesY.push(y);
  }

  function assignOffset() {
    for (i = 0; i < pictures.length; i++) {
      pictures[i].style.position = 'absolute';
      pictures[i].style.left = coordinatesX[i] + 'px';
      pictures[i].style.top = coordinatesY[i] + 'px';
    }
  }

  function makeDraggable(pic) {
    pic.setAttribute('draggable', 'true');

    pic.onmouseover = function (event) {
      pic.className = 'hold';
    };

    pic.onmousedown = function (event) {
      let shiftX = event.clientX - pic.getBoundingClientRect().left;
      let shiftY = event.clientY - pic.getBoundingClientRect().top;
      pic.style.position = 'absolute';
      pic.style.zIndex = 500;
      document.body.append(pic);
      pic.className = 'grab';

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        pic.style.left = pageX - shiftX + 'px';
        pic.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      document.onmouseup = function () {
        pic.className = 'hold';
        document.removeEventListener('mousemove', onMouseMove);
        pic.onmouseup = null;
      };

      pic.onmouseleave = function (event) {
        pic.className = '';
      };
    };

    pic.ondragstart = function () {
      return false;
    };
  }
}
