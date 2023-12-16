import 'dart:convert';

class TaskModel {
  int id;
  String title;
  bool enable;

  TaskModel({
    required this.id,
    required this.title,
    required this.enable,
  });

  factory TaskModel.fromRawJson(String str) => TaskModel.fromJson(json.decode(str));

  String toRawJson() => json.encode(toJson());

  factory TaskModel.fromJson(Map<String, dynamic> json) => TaskModel(
        id: json["id"],
        title: json["title"],
        enable: json["enable"],
      );

  Map<String, dynamic> toJson() => {"id": id, "title": title, "enable": enable};
}
