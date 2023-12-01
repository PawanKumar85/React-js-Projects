import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  // constructor
  constructor() {
    this.client
      .setEndpoint(conf.appwrite_url)
      .setProject(conf.appwrite_project_id);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // create post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("create post", error);
    }
  }

  // update post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Update post", error);
    }
  }

  // delete post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        slug
      );
      return true;
    } catch (error) {
      console.log("Delete Post", error);
      return false;
    }
  }

  // read single post only
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        slug
      );
    } catch (error) {
      console.log("get post", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwrite_database_id,
        conf.appwrite_collection_id,
        queries
      );
    } catch (error) {
      console.log("Get Posts", error);
    }
  }

  // file upload services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwrite_bucket_id,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Upload File", error);
    }
  }

  // delete file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwrite_bucket_id, fileId);
      return true;
    } catch (error) {
      console.log("Delete file", error);
      return false;
    }
  }

  // get file preview
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwrite_bucket_id, fileId);
  }

  
}

const service = new Service();
export default service;
