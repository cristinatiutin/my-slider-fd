import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})

export class SliderComponent implements OnInit {
  @Input() src!: string[];
  @Input() alt!: string[];
  @Input() description?: string;
  interval = 0;
  isReverse = false;
  constructor() { }

  ngOnInit(): void {
    var picWidth = 160;
    var poz = 0;
    var li_list = document.getElementsByTagName("li");
    setTimeout(()=>{
      for(let i=0; i<li_list.length; i++) {
        poz += picWidth;
        li_list[i].style.left = poz.toString() + 'px';
      }
      this.interval = setInterval(()=>{
        var li_list = document.getElementsByTagName("li");
        for(let i=0; i<li_list.length; i++) {
          const value = (Number.parseInt(li_list[i].style.left.substring(0, li_list[i].style.left.length-2)) + 10).toString() + 'px';
          li_list[i].style.left = value;
          var li = li_list[i];
          if(li !== null && li.parentElement !== null) {
            var left = li.parentElement.offsetLeft + li.offsetLeft;
            if (left > window.innerWidth) {
              var val = left-window.innerWidth+40;
              if(this.src.length>10) {
                val = val - 160*(this.src.length-10)
              }
              li.style.left = val.toString() + 'px';
            }
          }
        }
      }, 100);
    }, 1);
  }

  imgClick(id: string) {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(id);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    clearInterval(this.interval);
    if(modal !== null) {
      modal.style.display = "block";
    }
    if(modalImg !== null && img !== null) {
      modalImg.setAttribute('src', <string>img.getAttribute("src"));
    }
    if(captionText !== null && img !== null) {
      captionText.innerHTML = <string>img.getAttribute('alt');
    }
  };

  modalClick() {
    var modal = document.getElementById('myModal');
    if(modal !== null) {
      modal.style.display = "none";
    }
    if(!this.isReverse) {
      this.interval = setInterval(() => {
        var li_list = document.getElementsByTagName("li");
        for (let i = 0; i < li_list.length; i++) {
          const value = (Number.parseInt(li_list[i].style.left.substring(0, li_list[i].style.left.length - 2)) + 10).toString() + 'px';
          li_list[i].style.left = value;
          var li = li_list[i];
          if (li !== null && li.parentElement !== null) {
            var left = li.parentElement.offsetLeft + li.offsetLeft;
            if (left > window.innerWidth) {
              var val = left-window.innerWidth+40;
              if(this.src.length>10) {
                val = val - 160*(this.src.length-10)
              }
              li.style.left = val.toString() + 'px';
            }
          }
        }
      }, 100);
    } else {
      this.interval = setInterval(() => {
        var li_list = document.getElementsByTagName("li");
        for (let i = 0; i < li_list.length; i++) {
          const value = (Number.parseInt(li_list[i].style.left.substring(0, li_list[i].style.left.length - 2)) - 10).toString() + 'px';
          li_list[i].style.left = value;
          var li = li_list[i];
          if (li !== null && li.parentElement !== null) {
            var left = li.parentElement.offsetLeft + li.offsetLeft;
            if (left < -160) {
              li.style.left = (window.innerWidth - left + 20).toString() + 'px';
            }
          }
        }
      }, 100);
    }
  }

  reverse() {
    this.isReverse = !this.isReverse;
    clearInterval(this.interval);
    if(this.isReverse) {
      this.interval = setInterval(() => {
        var li_list = document.getElementsByTagName("li");
        for (let i = 0; i < li_list.length; i++) {
          const value = (Number.parseInt(li_list[i].style.left.substring(0, li_list[i].style.left.length - 2)) - 10).toString() + 'px';
          li_list[i].style.left = value;
          var li = li_list[i];
          if (li !== null && li.parentElement !== null) {
            var left = li.parentElement.offsetLeft + li.offsetLeft;
            if (left < -160) {
              li.style.left = (window.innerWidth - left + 20).toString() + 'px';
            }
          }
        }
      }, 100);
    } else {
      this.interval = setInterval(() => {
        var li_list = document.getElementsByTagName("li");
        for (let i = 0; i < li_list.length; i++) {
          const value = (Number.parseInt(li_list[i].style.left.substring(0, li_list[i].style.left.length - 2)) + 10).toString() + 'px';
          li_list[i].style.left = value;
          var li = li_list[i];
          if (li !== null && li.parentElement !== null) {
            var left = li.parentElement.offsetLeft + li.offsetLeft;
            if (left > window.innerWidth) {
              var val = left-window.innerWidth+40;
              if(this.src.length>10) {
                val = val - 160*(this.src.length-10)
              }
              li.style.left = val.toString() + 'px';
            }
          }
        }
      }, 100);
    }
  }
}
