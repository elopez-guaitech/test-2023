import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class InsertData extends ConsumerWidget {
  InsertData({super.key});

  final TextEditingController _controllerInsert = TextEditingController();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Container(
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: _controllerInsert,
              decoration: InputDecoration(
                hintText: 'Ingrese la tarea',
              ),
            ),
          ),
          GestureDetector(
            child: Icon(Icons.add),
            onTap: () {},
          )
        ],
      ),
    );
  }
}
