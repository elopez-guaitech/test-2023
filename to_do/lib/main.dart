import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:to_do/screen/form.dart';
import 'package:to_do/screen/task.dart';

void main() => runApp(ProviderScope(child: const MyApp()));

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Material App Bar'),
        ),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 150),
          child: Column(
            children: [
              InsertData(),
              TableData(),
            ],
          ),
        ),
      ),
    );
  }
}
