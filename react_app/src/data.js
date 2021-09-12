import {darkColors,lightColors} from "./components/common"

const accordionData = [
    {
      main: 'What do you call a dog magician?',
      hidden: 'A labracadabrador.'
    },
    {
      main: 'What do you call a funny mountain?',
      hidden: 'Hill-arious.'
    },
    {
      main: 'What did the astronaut say when he crashed into the moon?',
      hidden: 'I Apollo-gize.'
    }
  ];


  // Set navlinks Object
  const navlinks = [
    {url: "/" , title: "Home", className: "navbar-item"},
    {url: "/cases" , title: "Cases", className: "navbar-item"},
    {url: "/control" , title: "Control", className: "navbar-item"},
    {url: "/help" , title: "Help", className: "navbar-item"}]
    
  //TODO: Bring all dynamic data from the Flask API
  const conversionFactors = { lenght: {"km": 1000, "cm": 1/100, "mm": 1/1000, "um": 1/1000000, "m": 1},
                              pressure: {"psi": 0.000145038, "mmHg": 0.00750062, "Pa": 1,}};
  
  const  formData = {gap: {label: "Gap:", defaultValue:"0", unitType:"lenght", selectecUnit:"mm"},
                size: {label: "Size:", defaultValue:"0", unitType:"lenght", selectecUnit:"cm"},
                p0: {label: "Inlet Pressure:", defaultValue:"0", unitType:"pressure", selectecUnit:"psi"}};
  
  const actionData = {actionButtom: {tootip:"Grupo de Ações" ,icon:"fas fa-plus" ,rotate:true, 
                                      backgroundColor: darkColors.blue ,color: lightColors.white},
                      actions: [{tooltip:"Ação 0" ,icon:"fas fa-react" ,key:"action1" ,url:"/" ,backgroundColor: darkColors.blue ,color: lightColors.white},
                                {tooltip:"Ação 1" ,icon:"fas fa-minus" ,key:"action2" ,url:"/" ,backgroundColor: darkColors.blue ,color: lightColors.white}
                                ]};

export {accordionData, navlinks, conversionFactors, formData, actionData}
