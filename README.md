# XMLHttpRequest
上传进度条
var formData = new FormData();

for (var i = 0; i < files.length;i++) {
  formData.append('files[]', files[i]);
}

var xhr = new XMLHttpRequest();

xhr.open('POST', form.action);
xhr.send(formData);

新版本的XMLHttpRequest对象，传送数据的时候，有一个progress事件，用来返回进度信息。
它分成上传和下载两种情况。下载的progress事件属于XMLHttpRequest对象，上传的progress事件属于XMLHttpRequest.upload对象。
我们先定义progress事件的回调函数。

xhr.onprogress = updateProgress;
xhr.upload.onprogress = updateProgress;

然后，在回调函数里面，使用这个事件的一些属性。

function updateProgress(event) {
  if (event.lengthComputable) {
    var percentComplete = event.loaded / event.total;
  }
}

与progress事件相关的，还有其他五个事件，可以分别指定回调函数：

* load事件：传输成功完成。
* abort事件：传输被用户取消。
* error事件：传输中出现错误。
* loadstart事件：传输开始。
* loadEnd事件：传输结束，但是不知道成功还是失败。
