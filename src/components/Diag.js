import { PieChart } from 'react-minimal-pie-chart';

import './Diag.css'
const Diag = () => {
    return (
        <div className='diag_css'>
            <PieChart 
                data={[
                    { title: 'Easy', value: 10, color: '#b2df89' },
                    { title: 'Two', value: 15, color: '#204e66' },
                    { title: 'Three', value: 20, color: '#1f78b2' },
                ]}
            />
        </div>


    )
}

export default Diag