var testHtml = heredoc(function(){/*
<nav class="navbar navbar-inverse navbar-fixed-top" >
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">镶金牙后台管理系统（admin）</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li role="presentation" class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        订单管理 <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a role="button" href="order_todo.html">待办列表</a></li>
                        <li><a role="button" href="order_history.html">历史订单</a></li>
                    </ul>
                </li>
                <li><a href="#">商家管理</a></li>
                <li><a href="#">权限管理</a></li>

                <li><a href="#">帮助</a></li>
            </ul>
        </div>
    </div>
</nav>

*/});


/*长字符串换行*/
function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
}

var h = heredoc(testHtml);
document.write(h);