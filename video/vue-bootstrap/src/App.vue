<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
    	<!-- Brand and toggle get grouped for better mobile display -->
    	<div class="navbar-header">
    		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
    			<span class="sr-only">Toggle navigation</span>
    			<span class="icon-bar"></span>
    			<span class="icon-bar"></span>
    			<span class="icon-bar"></span>
    		</button>
    		<a class="navbar-brand" href="#">Home</a>
    	</div>
    
    	<!-- Collect the nav links, forms, and other content for toggling -->
    	<div class="collapse navbar-collapse navbar-ex1-collapse">
    		<ul class="nav navbar-nav">
    			<li class="active"><a href="#">Link</a></li>
    			<li><a href="#">Link</a></li>
    		</ul>
    		<form class="navbar-form navbar-left" role="search">
    			<div class="form-group">
    				<input type="text" class="form-control" placeholder="Search">
    			</div>
    			<button type="submit" class="btn btn-default">Submit</button>
    		</form>
    		<ul class="nav navbar-nav navbar-right">
    			<li><a href="#">Link</a></li>
    			<li class="dropdown">
    				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
    				<ul class="dropdown-menu">
    					<li><a href="#">Action</a></li>
    					<li><a href="#">Another action</a></li>
    					<li><a href="#">Something else here</a></li>
    					<li><a href="#">Separated link</a></li>
    				</ul>
    			</li>
    		</ul>
    	</div><!-- /.navbar-collapse -->
    </nav>
    <button class="btn btn-default">我是默认按钮</button>
    <button class="btn btn-info">我是信息按钮</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
