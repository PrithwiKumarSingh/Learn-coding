#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

// Semaphores
sem_t mutex;   // protects readCount
sem_t wrt;     // writer lock
sem_t queue;   // fairness (prevents starvation)

int readCount = 0;

// 🔹 Reader Function
void* reader(void* arg) {
    int id = *((int*)arg);

    sem_wait(&queue);      // wait in queue
    sem_wait(&mutex);

    readCount++;
    if (readCount == 1)
        sem_wait(&wrt);    // first reader blocks writer

    sem_post(&mutex);
    sem_post(&queue);

    // 🔍 Reading Section
    printf("Reader %d is reading\n", id);
    sleep(1);

    sem_wait(&mutex);
    readCount--;

    if (readCount == 0)
        sem_post(&wrt);    // last reader releases writer

    sem_post(&mutex);

    return NULL;
}

// 🔹 Writer Function
void* writer(void* arg) {
    int id = *((int*)arg);

    sem_wait(&queue);   // wait in queue
    sem_wait(&wrt);     // exclusive access

    // ✏️ Writing Section
    printf("Writer %d is writing\n", id);
    sleep(2);

    sem_post(&wrt);
    sem_post(&queue);

    return NULL;
}

int main() {
    int n_readers = 3, n_writers = 2;

    pthread_t r[n_readers], w[n_writers];
    int r_id[n_readers], w_id[n_writers];

    // Initialize semaphores
    sem_init(&mutex, 0, 1);
    sem_init(&wrt, 0, 1);
    sem_init(&queue, 0, 1);

    // Create reader threads
    for (int i = 0; i < n_readers; i++) {
        r_id[i] = i + 1;
        pthread_create(&r[i], NULL, reader, &r_id[i]);
    }

    // Create writer threads
    for (int i = 0; i < n_writers; i++) {
        w_id[i] = i + 1;
        pthread_create(&w[i], NULL, writer, &w_id[i]);
    }

    // Join threads
    for (int i = 0; i < n_readers; i++) {
        pthread_join(r[i], NULL);
    }

    for (int i = 0; i < n_writers; i++) {
        pthread_join(w[i], NULL);
    }

    // Destroy semaphores
    sem_destroy(&mutex);
    sem_destroy(&wrt);
    sem_destroy(&queue);

    printf("\nExecution completed.\n");

    return 0;
}