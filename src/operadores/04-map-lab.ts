import { fromEvent, Subscriber } from 'rxjs';
import { map, tap } from 'rxjs/operators';




const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia non justo vel rutrum. Donec tempus ornare aliquet. Aenean consectetur eget turpis nec commodo. Nam rhoncus congue ex at consequat. Integer felis velit, scelerisque a condimentum sed, ullamcorper et felis. Morbi nec malesuada massa. Nam interdum diam eu sapien varius, at interdum libero iaculis.
<br></br>
Vestibulum tempus convallis erat. Nullam fermentum, massa vel sodales luctus, quam mauris bibendum velit, eget ultrices leo purus non odio. Curabitur viverra purus sapien, id ultricies nulla pulvinar eu. Aliquam eget scelerisque nibh, eget posuere augue. Morbi rutrum ipsum nec ligula molestie varius. Quisque nisi dui, elementum ac bibendum eu, efficitur eleifend leo. Nullam vitae purus nec metus dapibus vehicula. Morbi ut velit ut mi interdum sodales nec quis ligula. Proin tincidunt fringilla arcu, a finibus enim lacinia in. Maecenas turpis orci, dignissim eget ligula ac, aliquam egestas libero. Sed consequat et justo vel cursus. Quisque pulvinar facilisis quam ut commodo. In posuere, dui mattis pretium porttitor, tortor enim eleifend urna, vel malesuada purus nisi eu leo. Phasellus posuere lectus id nibh fringilla efficitur. Curabitur nulla lacus, suscipit non quam pulvinar, imperdiet vestibulum leo. Phasellus pharetra, dolor eu porta sodales, velit turpis molestie nisl, eu placerat neque ex consequat enim.
<br></br>
Phasellus quis congue sapien. Maecenas eget ipsum et nulla tincidunt elementum. Donec vitae nunc nulla. Aenean elementum quis orci quis semper. Aliquam sollicitudin nibh ut purus rhoncus placerat. Vestibulum eu egestas augue. Etiam tempor ligula tincidunt, viverra tortor ac, tincidunt sapien. Maecenas ac tincidunt lectus, sed dignissim nunc. Sed rhoncus, elit eget lobortis pellentesque, risus mi convallis libero, id auctor tortor nisi in mauris. Praesent luctus laoreet felis sed aliquam.
<br></br>
Etiam gravida maximus vehicula. Nunc id ligula at metus luctus vestibulum eget quis magna. Aenean id enim non quam placerat aliquet. Pellentesque ultricies nunc purus, ultrices vulputate ante commodo at. In facilisis, orci ac pretium iaculis, quam diam aliquam urna, eu euismod risus nunc eu est. Etiam blandit orci et vehicula iaculis. Maecenas id enim a mi dignissim auctor. Suspendisse id ultricies ipsum. Mauris at lectus iaculis, aliquet eros eu, dictum lectus. Pellentesque finibus commodo est eget auctor. Donec et dictum tortor.
<br></br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc scelerisque tempus rhoncus. Proin diam ex, vehicula sit amet purus ut, pulvinar faucibus eros. Quisque lacinia consequat mi, quis porttitor massa elementum eu. Nulla lacinia ligula feugiat euismod pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus consequat dui nec ipsum lobortis consequat. Morbi feugiat nisl magna, et viverra justo mattis ac. Pellentesque vel vulputate massa, eget sollicitudin nulla. Phasellus accumsan sapien sit amet massa pellentesque blandit. Ut ullamcorper tristique interdum. Phasellus lacus purus, suscipit vel vestibulum sit amet, malesuada sed velit. Nam eget consectetur mauris, et viverra augue.
<br></br>
Aenean pretium non metus vel iaculis. Nullam volutpat, nunc eu molestie varius, nunc erat fringilla diam, ultrices lobortis est diam a ipsum. Nam ligula ligula, porta suscipit elementum eget, accumsan vitae ipsum. Aliquam bibendum dictum mattis. Quisque lobortis aliquam quam non ornare. Nam egestas convallis purus porttitor dapibus. Maecenas ac tortor non nisl accumsan ultrices. Nulla sed hendrerit neque. Nam velit velit, molestie nec turpis vel, tincidunt eleifend dui. Aliquam et tincidunt purus. Vivamus accumsan efficitur mauris sed pretium. Curabitur sem elit, vestibulum a augue nec, lacinia rutrum risus. Cras et porta enim. Sed rhoncus purus ac erat cursus, at condimentum turpis tincidunt. Aenean ipsum felis, gravida non vehicula et, fermentum ac turpis. Maecenas pharetra dapibus laoreet.
<br></br>
Phasellus consequat ante quis tellus malesuada, tempor eleifend orci lobortis. Ut mattis blandit magna sit amet feugiat. Nunc blandit congue mi, vitae commodo justo viverra vitae. Suspendisse pretium porta lobortis. Nunc lobortis lacus a consectetur pulvinar. Aliquam leo ante, commodo in semper ut, imperdiet rhoncus mauris. In commodo non lorem at luctus. Ut luctus at enim ut imperdiet. Donec sed mattis erat.
<br></br>
Ut lacinia, odio id consequat tincidunt, neque dui pulvinar velit, et vehicula magna diam sagittis lorem. Vivamus sagittis nunc nec mauris aliquam, quis sollicitudin est efficitur. In lacus diam, laoreet id felis sit amet, hendrerit porta sapien. Duis non diam molestie, aliquet neque a, elementum velit. Vestibulum sollicitudin purus id diam pellentesque, condimentum hendrerit quam vestibulum. Pellentesque est diam, efficitur pretium blandit eu, sodales non justo. Aliquam erat volutpat. Curabitur orci mi, fermentum dictum semper in, aliquam non nisi. Nunc aliquet nulla non pulvinar laoreet. In vel nisl a neque porttitor convallis. Cras nec sodales nibh. Nunc a auctor odio, quis ultricies orci. Suspendisse eget viverra metus, ac auctor enim. Donec finibus quis dolor ut dictum. Sed posuere, dolor a scelerisque convallis, enim metus egestas erat, nec maximus risus nisl sit amet lorem. Morbi malesuada tellus vitae augue maximus, vel cursus justo faucibus.
<br></br>
Etiam vel odio vel nisl aliquam euismod at eget neque. Vestibulum non scelerisque dolor. Nam mattis, nisl quis imperdiet cursus, sapien neque cursus erat, vel ullamcorper nunc neque et quam. Maecenas gravida, neque ut aliquet commodo, elit orci suscipit nulla, et dapibus augue neque malesuada nulla. Sed semper tincidunt vestibulum. Nunc maximus vestibulum tellus, vehicula viverra lacus tincidunt et. Phasellus consectetur dignissim elit, at lacinia arcu pretium eu. Sed fringilla odio eu pretium facilisis. Nam ultricies, dui at laoreet pretium, tellus turpis mollis mi, sit amet suscipit urna tellus sed quam. Donec id sagittis augue. Nullam commodo dolor ut sem lacinia rhoncus. Aenean eget ultricies eros. Cras ac ipsum convallis, lacinia augue quis, faucibus massa. Donec quam orci, pellentesque nec dictum nec, placerat nec orci.
<br></br>
Nullam nec dolor diam. Ut congue vulputate nisi at consectetur. Mauris vitae metus eget tellus venenatis vestibulum vitae eu sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla volutpat arcu eu purus ultrices accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse lorem quam, porta et rutrum sit amet, sodales vel eros. Phasellus luctus malesuada orci, et posuere lacus cursus at. Fusce vitae quam eu massa tincidunt volutpat quis non purus. Aliquam non auctor neque, id dignissim lacus. Sed aliquam posuere nisi. Vivamus dolor dui, tempor lacinia ex ac, suscipit rhoncus dui. Vestibulum ipsum tortor, ultricies id libero quis, euismod posuere erat.`



const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div')
progressBar.setAttribute('class','progress-bar')
body.append(progressBar);


//function que realice el calculo

//streams

const calcularPorcentajeScroll = ( event ) => {

    console.log( event );

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    console.log(scrollTop,scrollHeight,clientHeight);

    return (scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}

const scroll$ = fromEvent(document,'scroll')

// scroll$.subscribe(console.log)
const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width  = `${ porcentaje }%`
}) 
