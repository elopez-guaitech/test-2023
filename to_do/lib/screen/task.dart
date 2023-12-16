import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:to_do/data/taskProvider.dart';

class TableData extends ConsumerWidget {
  const TableData({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final size = MediaQuery.of(context).size;
    final dataTask = ref.watch(taskData);
    return Container(
        child: dataTask.when(
      data: (data) {
        return Expanded(
          child: ListView.builder(
            itemCount: data.length,
            itemBuilder: (context, index) {
              return Container(
                child: ListTile(
                  leading: CheckTask(),
                  title: Center(child: Text(data[index].title)),
                  trailing: Icon(
                    Icons.delete,
                    color: Colors.red,
                  ),
                ),
              );
            },
          ),
        );
      },
      error: (error, stackTrace) {
        return Container();
      },
      loading: () {
        return Center(
          child: CircularProgressIndicator(),
        );
      },
    ));
  }
}

class CheckTask extends StatefulWidget {
  const CheckTask({super.key});

  @override
  State<CheckTask> createState() => _CheckTaskState();
}

class _CheckTaskState extends State<CheckTask> {
  final valueTask = false;
  @override
  Widget build(BuildContext context) {
    return Checkbox(
      value: valueTask,
      onChanged: (value) {
        setState(() {
          valueTask != valueTask;
        });
      },
    );
  }
}
