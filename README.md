# My-Slider Angular Component

The web component which I created is called “my-slider” and consists of a horizontal slider for photos. It was realised using Angular framework.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage

The component is found in /src/app/slider. Copy the directory in your Angular app and in app.module.ts import:

`import {SliderComponent} from "./slider/slider.component";';`

and declare:

`@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ]
})`

To add it to your page, use the name my-slider for the custom tag:

`<my-slider [src]=photos [alt]=alternatives description="Capitals Of Europe, 2021"></my-slider>
`
## Component description

The created component relies on a horizontal slider for photos. The purpose of this component is to allow an easy integration of a continuous photo slider, inside a web page. The slider component consists of three files: a Typescript file, an HTML file and a CSS file.
<img src="Screenshot 2021-06-03 at 20.27.15.png"/>
<img src="Screenshot 2021-06-03 at 20.27.43.png"/>

## Input

The slider component has three input values which are given as attributes, when used in an HTML file. These include: a required array containing the relative image paths, a required array containing an alternate text for each image (in case the image cannot be displayed) and an optional description of the slide show.

## Code description
The ngOnInit() function initialises the corresponding variables. Basically, what ngOnInit does in this context is to iterate through the list items from the HTML file, where each such item includes an img tag with provided src and alt attributes, and place them next to each other, on a horizontal line. Then, setInterval() is called, such that every 100 milliseconds, each list item is moved with ten pixels to the right, creating the idea of a slider. When a list item reaches the right border of the window, it is sent to appear from the left border of the page or, in case the list has more items than the window can display, it is positioned before the last element to be displayed, giving the impression of continuity. Therefore, even after all images have been displayed, the items will continue to appear again and again.

Each image in the slide show has a click event, which triggers the imgClick() function. In this case, the slider will stop (through clearInterval()) and the image that was clicked will be displayed in as a modal image, in a larger format, together with its alternative text. When the modal image or the background is clicked, the modal image disappears and the slider continues from the state where it was left.

There exists also a reverse button, which has associated a click event with the reverse() function. When clicked, the slider stops, due to clearInterval(), and setInterval() is called, such that every 100 milliseconds, each list item is moved with ten pixels to the left, changing the direction of the slider. The same way, when a list item reaches the left border of the window, it is sent to appear from the right border of the page or, in case the list has more items than the window can display, it is positioned before the first element to be displayed this time, giving once again the impression of continuity.
