import gulpRunner from './some'
import '../styles/style.sass'
import $ from 'jquery'

gulpRunner()

$('.theme').html('gulp was run')
