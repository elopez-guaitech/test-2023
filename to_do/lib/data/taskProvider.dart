import 'dart:convert';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:to_do/models/taskModel.dart';
import 'package:http/http.dart' as http;

final taskData = FutureProvider<List<TaskModel>>((ref) async {
  final respose = await http.get(Uri.parse('http://192.168.0.6:3000/task/'));
  if (respose.statusCode == 200) {
    List<dynamic> taskJson = json.decode(respose.body);
    List<TaskModel> tasks = taskJson.map(
      (element) {
        return TaskModel.fromJson(element);
      },
    ).toList();
    return tasks;
  } else {
    print('Error en la consulta');
  }
  return [];
});

final taskCreate = FutureProvider<bool>((ref) async {
  Map<String, dynamic> data = {
    'title': 'Titulo Prueba',
    'enable': false,
  };
  final respose = await http.post(Uri.parse('http://192.168.0.6:3000/task/'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: json.encode(data));
  if (respose.statusCode == 200) {
    return true;
  } else {
    print('Error en la consulta');
  }
  return false;
});
