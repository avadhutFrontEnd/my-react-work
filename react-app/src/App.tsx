import React from 'react'
import ExpandableText from './components/ExpandableText'

const App = () => {
  return (
	<div>
		<ExpandableText  maxChars={10}>
			Hello word
			{/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, sunt optio! Aliquid necessitatibus commodi sed. Architecto ea molestias, illo modi placeat recusandae, quisquam non praesentium tempore vel distinctio dolorem sapiente asperiores aut optio omnis at delectus odit, laboriosam animi quia ipsa. Provident explicabo aliquid rerum odio sunt aut sit enim minus reprehenderit temporibus dolorum fuga, architecto quas molestiae blanditiis quibusdam, repellendus doloribus, esse consequatur exercitationem! Fugit deleniti suscipit unde eos soluta rerum repellendus, perspiciatis laudantium, error ipsa ut corrupti eveniet ad. Tempore perferendis, harum atque, illum explicabo natus, amet eligendi quae ipsa magni repudiandae officiis nostrum sit officia enim quisquam! */}
		</ExpandableText>
	</div>
  )
}

export default App