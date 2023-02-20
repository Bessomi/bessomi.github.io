import React from 'react';




class Skills extends React.Component {

	constructor(props) {
		super(props)
		this.skills = [
		{name: 'skill 1',
		content: 'I have this skill'},
		{name: 'skill 2',
		content: 'I have this skill too'},
		{name: 'skill 3',
		content: 'I have this skill YES I DO'}
		];


		this.state = {
			active: 'None'
		}
		this.myref = React.createRef()
	}

	handleclick(skillname) {
		this.setState({
			active: skillname
		})
		

	}

	renderbutton(skillname, key) {
		return(
			<div value = {skillname}
				className = {this.state.active == skillname ? 'skills-nav-btn-clicked' : 'skills-nav-btn'}
				key = {key}
				onClick = {()=> this.handleclick(skillname)}> {skillname}  </div>
		);

	}

	rendercontent(content, key) {
		return content
	}

	excecutescroll = () => this.myref.current.scrollIntoView()

	render() {
		const active = this.skills.find(s=>s.name==this.state.active)
		return(
		<div className='skills' ref = {this.myref}>
		 <div className='skills-nav'>
			 {this.skills.map((value, index) => {
			 	return this.renderbutton(value.name, 'button-key-' + index)
			 })}
		 </div>
		 <div className='skills-content'>
			 {active ? active.content : null}
		 </div>
		</div>

	 );
	}
}

export default Skills