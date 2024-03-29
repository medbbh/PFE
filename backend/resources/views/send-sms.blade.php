<!DOCTYPE html>
<html>

<head>
    <title>Laravel Twilio Send SMS Form - ScratchCode.io</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>

<body>
    <div class="container mt-5">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h2>Laravel Twilio Send SMS Form - ScratchCode.io</h2>
            </div>
            <div class="panel-body">
                @if ($message = Session::get('success'))
                <div class="alert alert-success alert-block">
                    <button type="button" class="close" data-dismiss="alert">×</button>
                    <strong>{{ $message }}</strong>
                </div>
                @endif

                @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.
                    <ul>
                        @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
                @endif

                <form action="{{ url('sms') }}" id="form" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="row">

                        <div class="col-md-12">
                            <div class="col-md-6 form-group">
                                <label>Receiver Number:</label>
                                <input type="text" name="receiver" class="form-control"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Message:</label>
                                <input name="message" class="form-control"></textarea>
                            </div>

                            <!-- <div class="col-md-6 form-group">
                                <button type="submit" class="btn btn-success">Send SMS</button>
                            </div> -->
                        </div>
                    </div>

                </form>

                <!-- <script>
                    setInterval(function click() {
                        document.getElementById('form').submit()
                    }, 30000);
                </script> -->

            </div>
        </div>
    </div>
</body>

</html>
