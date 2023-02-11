# react-horizontal-scroll-component
![Component Preview](https://github.com/sricharankrishnan/react-horizontal-scroll-component/blob/master/component-preview.gif?raw=true_)

### About
This is a reactjs component that is used for creating a horizontal scroll effect when users interact with webpages. The component was built on a sample create-react-app project template from which the re-useable portion was extracted as a seperate project. This is a functional component that relies on functional component hooks and thus, may not be suitabe for older react porjects.

Visit my sample portfolio website that uses this component at [The Lamborghini Safari](https://lamborghini-safari-react.netlify.app/). This should give you an idea of what to expect. Also, this effect is brought into effect for webpages being served on device with >= 1200px.

### Built Using
- React JS
- Functional Component
- Functional Component Hooks

### Prerequisites
Any react project that uses functional based hooks can utitlize this particular component. There are no major installation processes required for this effect using this component. Additionally, you would not need to send any specific props to this component. The only other requirement is to have child components wrapped, which will be rendered as _'props.children'_.

### Usage
- Download a copy of this repository into your local machine. Ideally you could take a zip file and extract it. Place the folder into a appropriate location in your react application. Once done, import it as needed like the sample shown below:
```javascript
import {HorizontalScrollParent} from "./path/to/location/react-horizontal-scroll-component/index.js";
```

- Create your required component. For example, let us imagine you have 5 items to be displayed using the horizontal scroll effect. You'll need to create it like below:
```javascript
import {HorizontalScrollParent} from "./path/to/location/react-horizontal-scroll-component/index.js";

export const YourSampleComponent = () => {
  return (
    <HorizontalScrollParent>
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
    </HorizontalScrollParent>
  );
};
```

- Please ensure that each child component has the required styles (like width and height) mentioned in your respective stylesheets. For example, in the sample portfolio website link given, you can see that the height of the child element is of 100vh. With this you should be able to see a basic framework for creating the horizontal scroll effect in react.

- While the only downside to this component is that is might not be flexible for each build case, it otherwise proves to be useful for many applications. The hook file in this project is perhaps the key to understanding this effect. You can refer to [this youtube tutorial](https://www.youtube.com/watch?v=lYj9FdqnYsc) for more information on how this was done.

### Raising Issues and Project Contributions
As a part of continuous improvements and maintenance, I am happy to hear from any of you if you have faced issues using this component. Also, if you have any ideas that can help improve this component, I'd love would to hear that as well. 

### Support This Project
If you like this project, I would really appreciate you placing a star on the github project. This would really help encourage me to become a better developer. Speak to your friends and colleagues about this project too if you can and seek their support. Here is wishing you a nice day and happy coding. Cheers!
