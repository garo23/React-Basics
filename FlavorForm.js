class FlavorForm extends React.Component{
   constructor(props){
    super(props);

    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }
   
   handleChange(event){
      this.setState({value: event.target.value});
   }

   handleSubmit(event){
    alert('Your favourite flavour is: ' + this.state.value);
    event.preventDefault();
   }
    
   render(){
    return(
         <form onSubmit = {this.handleSubmit}>
            <label>
                Pick your favourite flavours:
                <select value = {this.state.value} onChange ={this.handleChange}>
                <option value = "grapefruit">Grapefruit</option>
                <option value = "lime">Lime</option>
                <option value = "grape">Grape</option>
                <option value = "coconut">Coconut</option>
                 <input type="submit" value = "Submit"/>
                </select>
            </label>


         </form>

    )
   }
}
//You can pass an array into the value attribute, allowing you to select multiple options in a select tag:
//<select multiple={true} value={['B', 'C']}></select>