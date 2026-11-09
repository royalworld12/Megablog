import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query, TablesDB} from 'appwrite';


export class Service {
    client = new Client()
    tablesDB;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
        this.tablesDB = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug,content, featuredImage, status, userId}) {
        try {
            const post = await this.tablesDB.createRow({ databaseId: conf.appwriteDatabaseId, tableId: conf.appwriteCollectionId, rowId: slug, data: {
                title,
                content,
                featuredImage,
                status,
                userId
            }})
            return post
        } catch (error) {
            console.log("Appwrite Service: createPost error", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {

            const post = await this.tablesDB.updateRow({ databaseId: conf.appwriteDatabaseId, tableId: conf.appwriteCollectionId, rowId: slug, data: {
                title,
                content,
                featuredImage,
                status
            }})
            return post
        } catch (error) {
            console.log("Appwrite Service: updatePost error", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({ databaseId: conf.appwriteDatabaseId, tableId: conf.appwriteCollectionId, rowId: slug })
            return true
        } catch (error) {
            console.log("Appwrite Service: deletePost error", error)
            return false
        }
    }

    async getPosts(queries = [
        Query.equal('status', 'active')
    ]) {
        try {
            const posts = await this.tablesDB.listRows({ databaseId: conf.appwriteDatabaseId, tableId: conf.appwriteCollectionId, queries })
            return posts
        } catch (error) {
            console.log("Appwrite Service: getPosts error", error)
        }
        return []
    }

    async getPostBySlug(slug) {
        try {
            const post = await this.tablesDB.getRow({ databaseId: conf.appwriteDatabaseId, tableId: conf.appwriteCollectionId, rowId: slug })
            return post
        } catch (error) {
            console.log("Appwrite Service: getPostBySlug error", error)
        }
        return null
    }

    //file upload services
    async uploadFile(file) {
        try {
            const uploadedFile = await this.bucket.createFile({ bucketId: conf.appwriteBucketId, fileId: ID.unique(), file })
            return uploadedFile
        } catch (error) {
            console.log("Appwrite Service: uploadFile error", error)
        }
        return null
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({ bucketId: conf.appwriteBucketId, fileId })
            return true
        } catch (error) {
            console.log("Appwrite Service: deleteFile error", error)
            return false
        }
    }

    getFilePreview(fileId) {
        try {
            const filePreview = this.bucket.getFilePreview({ bucketId: conf.appwriteBucketId, fileId })
            return filePreview
        } catch (error) {
            console.log("Appwrite Service: getFilePreview error", error)
        }
        return null
    }

    async getFile(fileId) {
        try {
            const file = await this.bucket.getFile({ bucketId: conf.appwriteBucketId, fileId })
            return file
        } catch (error) {
            console.log("Appwrite Service: getFile error", error)
        }
        return null
    }
} 

const service = new Service()

export default service