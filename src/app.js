import {chart} from './chart.js'
import {getChartData} from './data'
import data from './data.json'
import './styles.scss'


const tgChart = chart(document.getElementById('chart'), data[0]) 
tgChart.init()













  