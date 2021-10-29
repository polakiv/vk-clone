import { Box } from '@mui/system'
import React from 'react'
import AddPost from './AddPost'
import Posts from './Posts'

const Home = () => {
	return (
		<Box>
			<AddPost />
			<Posts />
		</Box>
	)
}

export default Home
